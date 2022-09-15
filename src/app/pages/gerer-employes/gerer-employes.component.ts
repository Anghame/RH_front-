import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router } from '@angular/router';
import {  EmployeServiceService } from '../../services/employe-service.service';



@Component({
  selector: 'app-gerer-employes',
  templateUrl: './gerer-employes.component.html',
  styleUrls: ['./gerer-employes.component.scss']
})
export class GererEmployesComponent implements OnInit {
  data:any=[]
  dataArray:any=[]
  tab :any=[]
 
  dataEmploye={
    Matricule:0,
    Nom:'',
    Prenom:'',
    email:'',
    Date_n:'',
   
    telephone : 0,
    role :'',
    username:'',
    password:'',
    id:''

  }
  messageSuccess=''

  constructor(private ds:EmployeServiceService,private route:Router) { 
    this.ds.getAllEmployes().subscribe(data=>{
      console.log("aaa",data)
      this.dataArray=data
       this.tab = data['employe']
    })
    

  }

  ngOnInit(): void {
  }
  delete(id:any,i:number){

    this.ds.deletEmploye(id).subscribe(response=>{
      console.log(response)
      window. location. reload();
      this.dataArray.splice(i,1)
      console.log("baaaa ",this.dataArray)
      
      
      


    })
    

  }

  getdata(Nom:string,Prenom:string,role:string,Matricule:number,telephone:number,email:string,password:string,Date_n:string,username:string,id:any){
    this.messageSuccess=''
    this.dataEmploye.Matricule=Matricule
    this.dataEmploye.Nom=Nom
    this.dataEmploye.Prenom=Prenom
    this.dataEmploye.email=email
    this.dataEmploye.role=role
    this.dataEmploye.Date_n=Date_n
    this.dataEmploye.username=username
    this.dataEmploye.password=password
    this.dataEmploye.telephone=telephone

    this.dataEmploye.id=id
    console.log(this.dataEmploye)

    this.data=this.dataEmploye
    console.log('data',this.data)
  }

  goToUpdate(a:any) {
    this.route.navigate(['updateEmploye', a ]);
  }
 

/*
  updatenewstudent(f:any){
    let data=f.value
    this.ds.updateStudent(this.dataStudent.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataStudent.id)

        this.dataArray[indexId].firstname=data.firstname
        this.dataArray[indexId].lastname=data.lastname
        this.dataArray[indexId].age=data.age
        this.dataArray[indexId].phone=data.phone
        this.dataArray[indexId].email=data.email


        this.messageSuccess=`this student ${this.dataArray[indexId].firstname} is updated`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)
      
      })
  }


  details(id:any){
    this.route.navigate(['/admin/studentdetails/'+id])
  }
  */




}
