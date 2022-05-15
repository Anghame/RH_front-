import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    role: string[];
}
export const ROUTES: RouteInfo[] = [

    { path: '/user-profile', title: 'profil',  icon:'ni-single-02 text-green', class: '' , role:['employe', 'rh'] },
    { path: '/addDemande', title: 'Mes demandes',  icon:'ni-circle-08 text-blue', class: '', role:['employe'] },
    { path: '/Avance', title: 'Avance',  icon:'ni-money-coins text-orange', class: '' ,role:['employe']},
    { path: '/Conge', title: 'Conge',  icon:'ni-user-run text-red', class: '' ,role:['employe']},
    { path: '/Reclamation', title: 'Reclamation',  icon:'ni-collection text-pink', class: '',role:['employe'] },
    { path: '/GererEmployes', title: 'Employés',  icon:'ni-settings-gear-65 text-purple', class: '' ,role:[ 'rh']},
    { path: '/demandes', title: 'demandes',  icon:'ni-ungroup text-blue', class: '',role:[ 'rh'] },
    { path: '/AddEmploye', title: 'Ajouter Employé',  icon:'ni-fat-add text-green', class: '',role:[ 'rh'] }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  currentUserData = {} as any ;
  constructor(private router: Router) { }

  ngOnInit() {

    this.currentUserData = JSON.parse(localStorage.getItem('token'));
    console.log("cccc", this.currentUserData.role)
  /*   this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   }); */

   this.menuItems = ROUTES.filter(menuItem => menuItem.role.includes(this.currentUserData.role));
}
  
}
