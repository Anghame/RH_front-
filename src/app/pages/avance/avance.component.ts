import { Component, OnInit } from '@angular/core';
import {  DemandesService } from '../../services/demandes.service';
//import { DemandesService } from './demandes.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-avance',
  templateUrl: './avance.component.html',
  styleUrls: ['./avance.component.scss']
})
export class AvanceComponent implements OnInit {
  tabA :any=[]

  constructor(private ds:DemandesService,private route:Router) { 
    this.ds.getAllAvances().subscribe(dataA=>{
      console.log("Avance",dataA)
      //this.dataArrayR=dataA
       this.tabA = dataA['avance']
       console.log("avancess",this.tabA)
    })

    
  }
messageErr=''
nom:any;
token:any;
prenom:any;
  ngOnInit(): void {
    this.token=JSON.parse(localStorage.getItem("token"));
    this.nom=this.token.nom;
    console.log('i nom cncti ', this.nom)
    this.prenom=this.token.prenom;
    console.log('il prenom l connectee ', this.prenom)
  }
  add(f:any){
    let reff={
      nomD:this.nom,
      prenomD:this.prenom,
      Date_depot:"2022-05-16",
      
     
      //decision:false,
      etat:'non traite',
    }
    let data=f.value;
    var DataFinal = Object.assign({}, data, reff);
    
    console.log("dataAvance",data)
    console.log("final",DataFinal)
    this.ds.addAvance(DataFinal).subscribe(response=>{
    //console.log(response)

    window. location. reload();

    },
    (err:HttpErrorResponse)=>{
     this.messageErr=err.error
      console.log(err.error)
       console.log(err.status)
    })
  }


}
