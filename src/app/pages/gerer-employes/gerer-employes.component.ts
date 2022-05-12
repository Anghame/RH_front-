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
  dataArray:any=[]
  tab :any=[]
 
  dataEmploye={
    Matricule:'',
    Nom:'',
    Prenom:'',
    email:'',
    Date_n:'',
   
    telephone : 0,
    //role :String,
    //username:String,
    //password:String

  }

  constructor(private ds:EmployeServiceService,private route:Router) { 
    this.ds.getAllEmployes().subscribe(data=>{
      console.log("aaa",data)
      this.dataArray=data
       this.tab = data['employe']
    })
    

  }

  ngOnInit(): void {
  }

}
