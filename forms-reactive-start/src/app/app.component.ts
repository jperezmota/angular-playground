import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

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
        'username': new FormControl(null),
        'email': new FormControl(null),
        'gender': new FormControl('male')

      }
    );
  }
}
