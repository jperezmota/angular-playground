import { HttpInterceptor, HttpRequest, HttpUserEvent, HttpResponse, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted: ' + req);

    const copiedReq = req.clone(
        {
          params: req.params.set('auth', this.authService.getToken())
          // , headers: req.headers.set('','') // We won't use this but just for bear in mind that we can pass the headers also.
        }
    );

    return next.handle(copiedReq);
  }

}
