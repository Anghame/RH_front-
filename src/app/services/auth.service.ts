import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  helper=new JwtHelperService()
  role=''
  constructor(private http:HttpClient) { }
  login(data:any){

    return this.http.post( 'http://localhost:4040/login',data)
  } 
  saveDataProfil(token:any){
    
     //let decodeToken= this.helper.decodeToken(token)
      
     localStorage.setItem('token',JSON.stringify(token))
    //const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //JSON.parse(JSON.stringify(token)

  }

   LoggedInRH(){
    let token:any=localStorage.getItem('token')
    if(!token){
     return false
    }
    let decodeToken=this.helper.decodeToken(token)
   
   
    if(decodeToken.role!=='RH'){
      return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true
 }
 LoggedInEM(){
  let token:any=localStorage.getItem('token')
  if(!token){
   return false
  }
  let decodeToken=this.helper.decodeToken(token)
 
 
  if(decodeToken.role!=='employe'){
    return false
  }

  if(this.helper.isTokenExpired(token)){
    return false
  }

  return true
}

}
