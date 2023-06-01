import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../shared/user.model";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mockUsers: User =
    {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }


  constructor() { }

  // getUsers(firstname:string, lastname:string, email: string, password: string): Observable<User[]> {
  //   // this.mockUsers[0].firstname = firstname;
  //   //
  //   // return of(this.mockUsers);
  // }

  login(firstname: string , lastname: string , email: string , password: string ): Observable<User> {
    this.mockUsers.firstname = firstname!;
    this.mockUsers.lastname = lastname!;
    this.mockUsers.email = email!;
    this.mockUsers.password = password!;

    return of(this.mockUsers);
  }

  handleError(error: HttpErrorResponse){
    console.log(error.message);

  }
}
