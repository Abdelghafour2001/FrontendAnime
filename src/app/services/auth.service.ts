import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url:string = 'http://localhost:8080/api/auth';

  constructor(private http:HttpClient) { }

  login(data:{username:string, password:string})
  {
    return this.http.post(this.url+'/user/login',data)
      .pipe(map(data=>{return JSON.stringify(data)}))
  }

  confirmEmail(data:{token:string, email:string}){
    return this.http.post(this.url+'/user/emailconfirmation', data)
      .pipe(map(data=>{
        console.log(data)
        return JSON.stringify(data)
      }))
  }

  setSession(authResult:any) {
    localStorage.setItem('token', JSON.parse(authResult).token);
    this.changeStatus(true)
  }

  logout() {
    localStorage.removeItem("token");
    this.changeStatus(false)
  }

  isLoggedIn(){
    return localStorage.getItem('token') !== null
  }

  isLogout(){
    return !this.isLoggedIn()
  }

  getToken(){
    return localStorage.getItem('token')
  }

  register(data:{username:string, password:string,fullname:string,email:string}){
    return this.http.post(this.url+'/user/register',data)
      .pipe(map(data=>{return JSON.stringify(data)}))
  }

  forgetPassword(data:{email:string}){
    return this.http.post(this.url+'/user/forgetpassword',data)
      .pipe(map(data=>{return JSON.stringify(data)}))
  }

  resetPassword(data:{password:string,confirmPassword:string,token:string, email:string}){
    return this.http.post(this.url+'/user/resetpassword',data)
      .pipe(map(data=>{return JSON.stringify(data)}))
  }

  //used to manage session
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
  authStatus = this.loggedIn.asObservable();
  changeStatus(value:boolean){
    this.loggedIn.next(value)
  }
}
