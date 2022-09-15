import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DemandesService {
  token:any=JSON.parse(localStorage.getItem('token'))

  headerAdmin=new HttpHeaders()
  .set('authorization',this.token.token)
  .set('role','RH')

  
  headerall=new HttpHeaders()
  .set('authorization',this.token.token)

  constructor(private http:HttpClient) { }
  getAllAvances(){
    return this.http.get(`${environment.urlBackend}`+'getAllAvances/',{headers:this.headerAdmin})
  }
  getAllReclamation(){
    return this.http.get(`${environment.urlBackend}`+'getAllReclamations/',{headers:this.headerAdmin})
  }
  getAllconges(){
    return this.http.get(`${environment.urlBackend}`+'getAllconges/',{headers:this.headerAdmin})
  }

  //Avance


  addAvance(avance:any){

    return this.http.post(environment.urlBackend+'AddAvance',avance)

  }
  deletAvance(id:any){
    return this.http.delete(environment.urlBackend+'Avance/'+id,{headers:this.headerAdmin})

  }


  updateAvance(id:string,newAvance:any){

    return this.http.patch(environment.urlBackend+'Avance/'+id,newAvance,{headers:this.headerall})

  }


  getOneAvance(id:any){
    
    return this.http.get(environment.urlBackend+'Avance/'+id,{headers:this.headerall})
  }


//Conge

addConge(conge:any){

  return this.http.post(environment.urlBackend+'Addconge',conge)

}

  updateConge(id:string,newAvance:any){

    return this.http.patch(environment.urlBackend+'conge/'+id,newAvance,{headers:this.headerall})

  }


  getOneConge(id:any){
    
    return this.http.get(environment.urlBackend+'conge/'+id,{headers:this.headerall})
  }

//Reclamation

addReclamation(rec:any){

  return this.http.post(environment.urlBackend+'AddReclamation',rec)

}

updateReclamation(id:string,newR:any){

  return this.http.patch(environment.urlBackend+'Reclamation/'+id,newR,{headers:this.headerall})

}


getOneReclamation(id:any){
  
  return this.http.get(environment.urlBackend+'Reclamation/'+id,{headers:this.headerall})
}
}
