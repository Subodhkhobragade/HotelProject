import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandComponent } from './userland/userland.component';
import { MatButton, MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    UserlandComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule ,
    MatButtonModule
    
  ]
})
export class UserModule { }
