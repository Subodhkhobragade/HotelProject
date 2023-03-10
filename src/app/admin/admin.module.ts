import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { AdminfailComponent } from './adminfail/adminfail.component';





@NgModule({
  declarations: [
   
    AdminsigninComponent,
    AdminlandingComponent,
    AdminfailComponent,
  
  

   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatButtonModule,
    
   

    
   
  ]
})
export class AdminModule { }
