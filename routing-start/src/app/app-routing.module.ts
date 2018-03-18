import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

/*
  Constant for configure all the routes the app will be using.
  The first with the empty string is for the case when the user do not put any resource. For example just localhost:4200
*/
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  // The AuthGuard will be applied to the childs to automatically.
  {path: 'servers',
   component: ServersComponent,
   // canActivate: [AuthGuard], // Applying the guard to the parent
   canActivateChild: [AuthGuard], //Applying the guard just to the childs component and not the parent
   children: [
    {path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
  ]},
  // {path:"not-found", component: PageNotFoundComponent},
  {path:"not-found", component: ErrorPageComponent, data: {message: 'Page not found.'}},
  /* ** Any url that are no the above declared, will rediret no /not-found.
     Important: This path must be the last one declared to avoid conflicts with the above paths.
  */
  {path:"**", redirectTo: '/not-found'}

];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  /*This are the things that will be accesable for others modules that use this AppRoutingModule.
    We are telling to Angular what will be exposure outside.
  */
  exports: [RouterModule]
})
export class AppRoutingModule{

}
