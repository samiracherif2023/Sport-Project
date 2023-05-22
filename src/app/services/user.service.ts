import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get<{ usersArray: any }>(this.userURL);
  }

  getUserInfo(id: any) {
    return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(`${this.userURL}/${id}`);
  }
  // user : {firstName, lastName , email .... }
  signup(user: any, file: File) {

    let formData = new FormData();
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("password", user.password);
    if (user.tel) {
      formData.append("phone", user.phone);
    } 
    formData.append("role", user.role);
    formData.append("img", file);
    return this.httpClient.post<{ message: boolean }>(this.userURL + "/signup", formData);
  }

  // user : {email , pwd}
  login(user) {
    return this.httpClient.post<{ message: string, user: any }>(this.userURL + "/login", user);
  }

  editProfile(newProfile) {
    return this.httpClient.put(this.userURL, newProfile);
  }
}

