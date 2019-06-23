import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumNameComponent } from './album-name.component';

@NgModule({
  declarations: [AlbumNameComponent],
  imports: [
    CommonModule
  ],
  exports: [AlbumNameComponent]
})
export class AlbumNameModule { }
