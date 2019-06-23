import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import {FilterPipe} from '../services/filterPipe';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AlbumsComponent, FilterPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[AlbumsComponent]
})
export class AlbumsModule { }
