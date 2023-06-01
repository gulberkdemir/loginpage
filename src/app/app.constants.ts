import {User} from "./shared/user.model";

export const ValidUser: User =
  {
    firstname: 'userfirstname',
    lastname: 'userlastname',
    email: 'user@company.com',
    password: 'Pass123!'
  }

  export const  passwordRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
