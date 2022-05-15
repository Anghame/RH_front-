import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvancesService {
  token:any=JSON.parse(localStorage.getItem('token'))
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token.token)
  .set('role','RH')
  headerall=new HttpHeaders()
  .set('authorization',this.token.token)

  constructor(private http:HttpClient) { }


  getAvanceById(id : any){
    return this.http.get(`${environment.urlBackend}`+'Avance/'+id,{headers:this.headerAdmin})
  }


  addAvances(data:any){

    return this.http.post(environment.urlBackend+'AddAvance/',data,{headers:this.headerAdmin})

  }

  deleteAvance(id:any){
    return this.http.delete(environment.urlBackend+'Avance/'+id,{headers:this.headerAdmin})

  }

}
