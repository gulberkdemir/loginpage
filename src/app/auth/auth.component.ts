import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName:['',Validators.required ],
    email: ['',Validators.email],
    password: ['', Validators.required]

  })
  constructor(private fb: FormBuilder) {
  }

  login(){
    console.log(this.userForm.value);

  }

}
