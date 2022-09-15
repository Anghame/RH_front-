import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Router ,ActivatedRoute } from '@angular/router';
import {  EmployeServiceService } from '../../services/employe-service.service';


@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss']
})
export class UpdateEmployeComponent implements OnInit {
  
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
    id:'',
  }
  messageSuccess=''
  EditedPers : any

  constructor(private ds:EmployeServiceService,private route:Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (reponse) => {
        this.ds.getOneEmploye(reponse['id']).subscribe(
          (reponse : any) => {
            this.EditedPers = reponse;
            console.log('usernn',reponse);
            console.log("il userrrr",this.EditedPers)
            console.log("il userrridr",this.EditedPers._id)
          },
          (error) => {
            console.log("Error with getById");
            
          }
        );
       
        //console.log("il userrrr",this.EditedPers)
      }
    )
  }


  updatenewstudent(f:any) {
    let data=f.value
    //this.persServ.updatePersonne(this.EditedPers);
    this.ds.updateEmploye(this.EditedPers._id,data).subscribe(
      (reponse) => {
        this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updatePerson");
        
      }
    )
    
  }
 
/*
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

  }*/


}
