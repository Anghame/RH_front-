import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Conge } from '../classes/conge';

@Injectable({
  providedIn: 'root'
})
export class CongesService {
  token:any=JSON.parse(localStorage.getItem('token'))
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token.token)
  .set('role','RH')
  headerall=new HttpHeaders()
  .set('authorization',this.token.token)
  
  constructor(private http:HttpClient) { }


  getById(id : any){
    return this.http.get('http://localhost:4040/'+'conge/'+id)
  }
 

  addConge(data:Conge){

    return this.http.post('http://localhost:4040/'+'Addconge',data)

  }

  deleteConge(id:any){
    return this.http.delete(environment.urlBackend+'conge/'+id,{headers:this.headerall })

  }

 
}
