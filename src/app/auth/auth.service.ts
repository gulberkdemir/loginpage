import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../shared/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";

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


  constructor(private messageService: MessageService) { }

  // getUsers(firstname:string, lastname:string, email: string, password: string): Observable<User[]> {
  //   // this.mockUsers[0].firstname = firstname;
  //   //
  //   // return of(this.mockUsers);
  // }

  login(userObj: User ): Observable<User> {
    this.mockUsers.firstname = userObj.firstname;
    this.mockUsers.lastname = userObj.lastname;
    this.mockUsers.email = userObj.email;
    this.mockUsers.password = userObj.password;

    return of(this.mockUsers);
  }

  handleError(error: HttpErrorResponse){
    console.log(error.message);
    this.messageService.add({ key: 'myKey2', severity: 'error', summary: 'Email/password is not correct', detail: `${error.message}` });

  }
}
