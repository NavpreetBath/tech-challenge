import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
