import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
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


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AvanceComponent,
    CongeComponent,
    ReclamationComponent,
    GererEmployesComponent,
    AlldemandesComponent,
    AddEmployeComponent,

  ]
})

export class AdminLayoutModule {}
