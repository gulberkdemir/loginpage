import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {User} from "../shared/user.model";
import {filter, map, Observable, of, throwError} from "rxjs";
import {AuthService} from "./auth.service";
import {ValidUser} from "../app.constants";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  passwordRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  userObject = {} as User;


  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
    password: ['', [Validators.required]]

  })

  constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService) {
  }

  Submit() {
    if (!this.userForm.valid) {
      return;
    }
    this.ValidateUserLogin(this.userObject);
  }

  ValidateUserLogin(userObj: User){

    this.userObject.firstname = this.userForm.controls.firstName.value!;
    this.userObject.lastname = this.userForm.controls.lastName.value!;
    this.userObject.email = this.userForm.controls.email.value!;
    this.userObject.password = this.userForm.controls.password.value!;

    let newObs: Observable<User>;
    newObs = this.authService.login(userObj).pipe(map(user => {
      if (user.email === ValidUser.email && user.password === ValidUser.password) {
        return user;

      } else {
        throw new Error('You could not login');
      }
    }))

    newObs.subscribe({
        next: (val) => this.SuccessLogin(val),
        error: (error) => this.authService.handleError(error)
      }
    )

  }

  SuccessLogin(value: any) {
    this.messageService.add({
      key: 'myKey1',
      severity: 'success',
      summary: `User could login successfully`,
      detail: `${value.firstname} ${value.lastname} could login successfully`
    });
    this.SaveUserInLocalStorage(value);
  }

  SaveUserInLocalStorage(value: User){
    localStorage.setItem('userData', JSON.stringify(value));

  }



}
