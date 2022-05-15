import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReclamationsService {

  token:any=JSON.parse(localStorage.getItem('token'))
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token.token)
  .set('role','RH')
  headerall=new HttpHeaders()
  .set('authorization',this.token.token)
  
  constructor(private http:HttpClient) { }


  getById(id : any){
    return this.http.get(`${environment.urlBackend}`+'Reclamation/'+id,{headers:this.headerAdmin})
  }


  addReclamation(data:any){

    return this.http.post(environment.urlBackend+'AddReclamation/',data,{headers:this.headerAdmin})

  }

  deleteReclamation(id:any){
    return this.http.delete(environment.urlBackend+'Reclamation/'+id,{headers:this.headerAdmin})

  }

}
