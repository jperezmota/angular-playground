import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy{

  user: {id: number, name: string};

  // Declared to hold the subscription of the route.
  paramSubscripcion: Subscription;

  //Injecting the ActivatedRoute to have access to the current URL.
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

    this.paramSubscripcion = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /*
    The reason of implementing this method is to destroy the subscription that we did on the ngOnInit to the Router.
    This because Angular maintain the event subscription in memory and is not directly tight to the component, so when the Component
    in destroyed, the subscription may keep in memory. Angular behind the scene destroy this router subscription, but we are doing it
    to undertand what happends in the background.
  */
  ngOnDestroy(){
    this.paramSubscripcion.unsubscribe();
  }


}
