import { Component } from '@angular/core'

@Component({
  selector: "app-login",
  templateUrl: './login.component.html'
})
export class LoginComponent{
  username: string = '';
  loginButtonDisabled = true;

  onUsernameChange(){
    if(this.username != ''){
      this.loginButtonDisabled = false;
    }else{
      this.loginButtonDisabled = true;
    }

  }
}
