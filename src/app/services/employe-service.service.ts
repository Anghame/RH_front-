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


  getAllEmployes(){
    return this.http.get(`${environment.urlBackend}`+'getAllEmploye/',{headers:this.headerAdmin})
  }
  addEmploye(profile:any){

    return this.http.post(environment.urlBackend+'register/',profile,{headers:this.headerAdmin})

  }

  deletEmploye(id:any){
    return this.http.delete(environment.urlBackend+'Employee/'+id,{headers:this.headerAdmin})

  }


  updateEmploye(id:string,newprofile:any){

    return this.http.patch(environment.urlBackend+'Employee/'+id,newprofile,{headers:this.headerAdmin})

  }


  getOneEmploye(id:any){
    
    return this.http.get(environment.urlBackend+'Employee/'+id,{headers:this.headerall})
  }
}

