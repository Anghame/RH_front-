import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/app/classes/conge';
import { CongesService } from 'src/app/services/conges.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
  currentUser: any;
  id: any;
  conge = new Conge () ;
  date_d : string;
  nombre_jour : number;
  typeConge : string;
  listConge = [] as any;
  messageErr: any;
list:{
  decision:false,
  nomD:"String",
  prenomD:"String",
  Date_depot:"String",
  etat:"String",
  date_d: "String",
  nombre_jour:2,
  typeConge:"String",
}

  
  constructor( public congeService : CongesService , public router : Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('token'));
    console.log("currentUser",this.currentUser)
    this.id = this.currentUser.id
// get conge list
this.congeService.getById(this.id).subscribe((res) => {
  this.listConge = res;
  console.log("listConge " , this.listConge)
});

    ///

  }


  addConge(){

console.log("conge", this.conge)

    this.congeService.addConge(this.conge)
    .subscribe(
      res => {
       // this.router.navigateByUrl('/confirm')
       alert("ajout avec succ")
      },
      err => console.log(err)
    );
  }



add(){
 
    //console.log(data)
    this.congeService.addConge(this.conge).subscribe(response=>{
    console.log(response)

      //this.route.navigate(['/GererEmployes'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
      // console.log(err.error)
      // console.log(err.status)
    })
  }
}
