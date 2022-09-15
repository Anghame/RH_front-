import { Component, OnInit } from '@angular/core';
import {  DemandesService } from '../../services/demandes.service';
//import { DemandesService } from './demandes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.scss']
})
export class AddDemandeComponent implements OnInit {
  data:any=[]
  dataArray:any=[]
  tabC :any=[]

  dataA:any=[]
  dataArrayA:any=[]
  tabA :any=[]

  dataR:any=[]
  dataArrayR:any=[]
  tabR :any=[]

  constructor(private ds:DemandesService,private route:Router) {
    this.ds.getAllconges().subscribe(data=>{
      console.log("congess",data)
      this.dataArray=data
       this.tabC = data['conge']
       console.log("congessss",this.tabC)
    })

    this.ds.getAllAvances().subscribe(dataA=>{
      console.log("Avance",dataA)
      this.dataArrayR=dataA
       this.tabA = dataA['avance']
       console.log("avanc",this.tabA)
    })

    this.ds.getAllReclamation().subscribe(dataR=>{
      console.log("recl",dataR)
      this.dataArrayR=dataR
       this.tabR = dataR['reclamation']
       console.log("rec",this.tabR)
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

}
