import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  token:any
  role:any;
  nom : any;
  prenom : any;

  constructor() { }

  ngOnInit() {
    this.token=JSON.parse(localStorage.getItem("token"));
    this.role=this.token.role;
    this.nom =this.token.nom
    this.prenom=this.token.prenom
    //console.log('i role navbar ', this.nom)

  }

}
