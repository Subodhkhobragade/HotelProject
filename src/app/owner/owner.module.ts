import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { MatButton, MatButtonModule, MatFabButton } from '@angular/material/button';



@NgModule({
  declarations: [
  
    OwnerlandComponent,

  ],
  imports: [
    CommonModule,
    OwnerRoutingModule ,
    MatButtonModule,
  
 
  ]
})

export class OwnerModule { }
