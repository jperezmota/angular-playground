import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/Rx"; // Imported to use all the observable operator and so be able to use the map below.
import { Observable } from "rxjs/Rx";

//Adding @Injectable decorator cause in this service we are injecting another service in the constructor, called Http.
@Injectable()
export class ServerService{

  //Injecting the Http service of Angular.
  constructor(private http: Http){

  }

  storeServers(servers: any[]){
    /* Aproach 1: By default the header this post send is application/json. In case that we want to configure
    our own header and pass it to this post request follow the approach 2 below.*/
    //return this.http.post('https://udemy-ng-http-96a12.firebaseio.com/data.json', servers);

    /* Approach 2: Configuring ouer header and sent it with the POST.
    */
    // const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http-96a12.firebaseio.com/data.json',
    //                        servers,
    //                        {headers: headers}
    //                      );

    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put('https://udemy-ng-http-96a12.firebaseio.com/data.json',
                           servers,
                           {headers: headers}
                         );
  }

  /*
    map is a observable operator. This operator wraps the returned data, transforms it and put the transformed data
    into another observable and return that obsersable. http://reactivex.io/documentation/operators/map.html
  */
  getServers(){
    return this.http.get('https://udemy-ng-http-96a12.firebaseio.com/data')
                    .map(
                      (response: Response) => {
                        const data = response.json();
                        for(const server of data){
                          server.name = "FETCHED_" + server.name;
                        }
                        return data;
                      }
                    )
                    // We use Catch to catch any error with the request.
                    .catch(
                      (error: Response)=>{
                        /*
                          We need to return an Observable because the following reasons:
                            1. The catch by default doesn't return and observable.
                            2. Our component subscribed is waiting an Observable.
                        */
                        return Observable.throw("Something went wrong.");
                      }
                    );
  }
}
