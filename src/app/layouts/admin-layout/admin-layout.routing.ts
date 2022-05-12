import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddDemandeComponent } from '../../pages/add-demande/add-demande.component';
import { AvanceComponent } from '../../pages/avance/avance.component';
import { CongeComponent } from '../../pages/conge/conge.component';
import { ReclamationComponent } from '../../pages/reclamation/reclamation.component';
import { GererEmployesComponent } from '../../pages/gerer-employes/gerer-employes.component';
import { AlldemandesComponent } from '../../pages/alldemandes/alldemandes.component';
import { AddEmployeComponent } from '../../pages/add-employe/add-employe.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'addDemande',     component:AddDemandeComponent },
    { path: 'Avance',     component: AvanceComponent  },
    { path: 'Conge',     component:CongeComponent },

    { path: 'Reclamation',     component:ReclamationComponent },
    { path: 'GererEmployes',   component: GererEmployesComponent },
    { path: 'demandes',   component: AlldemandesComponent },
    { path: 'AddEmploye',   component: AddEmployeComponent },





];
