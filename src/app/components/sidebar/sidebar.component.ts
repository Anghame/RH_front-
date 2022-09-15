import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  //  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  //  { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
 //   { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'profil',  icon:'ni-single-02 text-green', class: '' },
  //  { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    //{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/addDemande', title: 'Mes demandes',  icon:'ni-circle-08 text-blue', class: '' },
    { path: '/Avance', title: 'Avance',  icon:'ni-money-coins text-orange', class: '' },
    { path: '/Conge', title: 'Conge',  icon:'ni-user-run text-red', class: '' },
    { path: '/Reclamation', title: 'Reclamation',  icon:'ni-collection text-pink', class: '' },
    { path: '/GererEmployes', title: 'Employés',  icon:'ni-settings-gear-65 text-purple', class: '' },
    { path: '/demandes', title: 'demandes',  icon:'ni-ungroup text-blue', class: '' },
    { path: '/AddEmploye', title: 'Ajouter Employé',  icon:'ni-fat-add text-green', class: '' }


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  token:any
  role:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
   this.token=JSON.parse(localStorage.getItem("token"));
   this.role=this.token.role;
   console.log('i role navbar ', this.role)
  }
}
