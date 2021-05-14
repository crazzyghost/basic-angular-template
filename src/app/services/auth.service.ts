import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthCredentials, User } from "../models";

const dataStore = {
  "email1@mail.com": {
    password: "password",
    firstName: "John",
    lastName: "Wick",
  },
  "email2@mail.com": {
    password: "password",
    firstName: "John",
    lastName: "Wick 2",
  },
  "email3@mail.com": {
    password: "password",
    firstName: "John",
    lastName: "Wick 3",
  },
};

@Injectable()
export class AuthService {
  constructor(@Inject("API_URL") apiUrl: string, private http: HttpClient) {}

  register(data: User): Promise<any> {
    setTimeout(() => {}, 1000);
    return new Promise((resolve) => {
      const { email } = data;
      dataStore[email] = { ...data };
      resolve({ status: 200, message: "login-register successful" });
    });
  }

  login(data: AuthCredentials): Promise<any> {
    return new Promise((resolve, reject) => {
      const { email, password } = data;
      const user = dataStore[email];
      if (user.password !== password) {
        setTimeout(() => {
          reject({ status: 400, message: "login-register failed" });
        }, 1000);
      } else {
        setTimeout(() => {
          resolve({ status: 200, message: "login-register successful" });
        }, 1000);
      }
    });
  }
}
