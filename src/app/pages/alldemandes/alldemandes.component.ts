import { Component, OnInit } from '@angular/core';
import {  DemandesService } from '../../services/demandes.service';
//import { DemandesService } from './demandes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldemandes',
  templateUrl: './alldemandes.component.html',
  styleUrls: ['./alldemandes.component.scss']
})
export class AlldemandesComponent implements OnInit {
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

  ngOnInit(): void {
  }


  accepterDemande(id:any,nomD:any,prenomD:any,Date_depot:any,somme:any,raison:any){
    let Acc={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      somme:somme,
      raison:raison,
      decision:true,
      etat:'traite',
    }
    this.ds.updateAvance(id,Acc).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateAvance");
        
      }
    )


  }


  refuserDemande(id:any,nomD:any,prenomD:any,Date_depot:any,somme:any,raison:any){
    let reff={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      somme:somme,
      raison:raison,
      decision:false,
      etat:'traite',
    }
    this.ds.updateAvance(id,reff).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateAvance");
        
      }
    )


  }


  ////////


  accepterDemandeC(id:any,nomD:any,prenomD:any,Date_depot:any,nombre_jour:any,typeConge:any){
    let Acc={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      nombre_jour:nombre_jour,
      typeConge:typeConge,
      decision:true,
      etat:'traite',
    }
    this.ds.updateConge(id,Acc).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateConge");
        
      }
    )


  }


  refuserDemandeC(id:any,nomD:any,prenomD:any,Date_depot:any,nombre_jour:any,typeConge:any){
    let reff={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      nombre_jour:nombre_jour,
      typeConge:typeConge,
      decision:false,
      etat:'traite',
    }
    this.ds.updateConge(id,reff).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateConge");
        
      }
    )


  }
  ///////




  //item._id,item.nomD,item.prenomD,item.Date_depot,item.type_R,item.text_R
  accepterDemandeR(id:any,nomD:any,prenomD:any,Date_depot:any,type_R:any,text_R:any){
    let Acc={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      type_R:type_R,
      text_R:text_R,
      decision:true,
      etat:'traite',
    }
    this.ds.updateReclamation(id,Acc).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateReclamation");
        
      }
    )


  }


  refuserDemandeR(id:any,nomD:any,prenomD:any,Date_depot:any,type_R:any,text_R:any){
    let reff={
      nomD:nomD,
      prenomD:prenomD,
      Date_depot:Date_depot,
      type_R:type_R,
      text_R:text_R,
      decision:false,
      etat:'traite',
    }
    this.ds.updateReclamation(id,reff).subscribe(
      (reponse) => {
        window. location. reload();
       // this.route.navigate(['/GererEmployes']);
      },
      (error) => {
        console.log("Error with updateReclamation");
        
      }
    )


  }

}
