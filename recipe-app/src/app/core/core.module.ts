import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRouting } from "../app-routing.module";



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRouting
  ],
  exports: [
    AppRouting,
    HeaderComponent
  ]
})
export class CoreModule{

}
