import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthGuard } from "./auth-guard.service";


@NgModule({
  declarations:[
    SigninComponent,
    SignupComponent
  ],
  imports:[
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule{


}
