import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../shared/user.model";
import {filter, map, Observable, of, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {ValidUser} from "../app.constants";
import {MessageService} from "primeng/api";




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  passwordRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  userObject = {} as User;


  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required ],
    email: ['',[Validators.required, Validators.pattern(this.passwordRegex)]],
    password: ['', [Validators.required]]

  })
  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  Submit(){

    if (!this.userForm.valid) {
      return;
    }
    const firstname = this.userForm.controls.firstName.value;
    const lastname = this.userForm.controls.lastName.value;

    const email = this.userForm.controls.email.value;
    const password = this.userForm.controls.password.value;
    let authObs: Observable<User>;
    let obs: Observable<Observable<User>>;




    console.log(firstname,lastname);


    authObs = this.authService.login(firstname!, lastname!, email!, password!);





    obs = authObs.pipe(map(user => {
        if (user.email === ValidUser.email && user.password === ValidUser.password) {
          console.log('aaa')
          return of(user)

        }else {
          console.log('bbbb')
          throw new Error('You could not login');
        }
      }
    ))




    obs.subscribe({
      next: (val) => console.log(val),
      error: (error) => this.authService.handleError( error)
    });




  }

}
