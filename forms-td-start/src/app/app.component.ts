import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female']

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* #1. setValue() Approach: Setting all the forms value input. The object properties must match with their input names and group
       names of the html. Maybe this is not the best approach in this scenario because if the users already enter some values and
       we call this method it will overide everything. Also it forces you to pass all the form data even if they are required or not.
    */
    // this.signupForm.setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: ''
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'
    //   }
    // );

    /*
       #2. patchValue(). This approach let us overide specific form element, and not just the whole form values.
    */
    this.signupForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    );
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.signupForm);

    this.submitted = true;
    
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }

}
