import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];

  signupForm: FormGroup;
  // we create the array key value with single quote for magnified security. If you want you can remove it, but for not risk lets keep it
  ngOnInit(): void {
    this.signupForm = new FormGroup(
      {
        // the first argument of FormControl is the default value of the html element. The second is the validations.
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gender': new FormControl('male')

      }
    );
  }

  onSubmit(){
    console.log(this.signupForm);
  }
}
