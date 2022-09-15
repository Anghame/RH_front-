import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {
  token:any=JSON.parse(localStorage.getItem('token'))

  headerAdmin=new HttpHeaders()
  .set('authorization',this.token.token)
  .set('role','RH')

  
  headerall=new HttpHeaders()
  .set('authorization',this.token.token)
  constructor(private http:HttpClient) { }
//ddcdfsd

  getAllEmployes(){
    return this.http.get(`${environment.urlBackend}`+'getAllEmploye/',{headers:this.headerall})
  }
  addEmploye(profile:any){

    return this.http.post(environment.urlBackend+'register',profile)

  }

  deletEmploye(id:any){
    return this.http.delete(environment.urlBackend+'Employee/'+id,{headers:this.headerall})

  }


  updateEmploye(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'Employee/'+id,newprofile,{headers:this.headerall})

  }


  getOneEmploye(id:any){
    
    return this.http.get(environment.urlBackend+'Employee/'+id,{headers:this.headerall})
  }
}

