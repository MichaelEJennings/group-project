import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  register(user) {
    console.log("User Service Was Hit");
    return this.http.post(`${window.location.origin}/users/register`, user);
  }
 
  login(user) {
    console.log("Login Was Hit!");
    return this.http.post(`${window.location.origin}/users/login`, user);
  
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('userName');
    localStorage.removeItem('id');

  }

  getUser(id:number) {
    console.log("GetUser")
    return this.http.get(`${window.location.origin}/users/`+ id);
  }

  updateUser(user) {
    console.log('update User');
    console.log(`${window.location.origin}/users/update`);
    return this.http.put(`${window.location.origin}/users/update`,user);
  }

  deleteUser(id:String) {
    console.log("Delete User")

    return this.http.delete(`${window.location.origin}/users/delete/` + id);
  }

  constructor(private http: HttpClient) {

  }
}
