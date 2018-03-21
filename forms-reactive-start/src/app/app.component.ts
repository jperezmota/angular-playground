import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Cris', 'Anna'];

  ngOnInit(): void {
    // we create the array key value with single quote for magnified security. If you want you can remove it, but for not risk lets keep it
    this.signupForm = new FormGroup(
      {
        'userData': new FormGroup(
          {
            // the first argument of FormControl is the default value of the html element. The second is the validations.
            'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this) )
          }
        ),
        'gender': new FormControl('male'),
        // For adding custom inputs values dinamically.
        'hobbies': new FormArray([])
      }
    );

  }


  //Custom validator for asynchronous validator. Simulating a call to a back-end app through a web service.
  forbiddenEmail(control: FormControl){
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        }else{
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  //For dinamically adding custom input element to our existing form.
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  //Custom validator for synchronoues validation.
  forbiddenNames(control: FormControl): {[s:string] : boolean}{
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null; //If the validation is successful is must return NULL or return Nothing. So if we want can remove this line.
  }


}
