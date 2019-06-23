import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlbumsModule} from '../app/albums/albums.module';
import { HttpClientModule } from '@angular/common/http';
import {AlbumNameModule} from '../app/album-name/album-name.module';
import {GetImageService} from '../app/services/getImageService';
import {FilterPipe} from '../app/services/filterPipe';
import {PhotosModule} from '../app/photos/photos.module';
import {UsersModule} from '../app/users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumsModule,
    AlbumNameModule,
    PhotosModule,
    UsersModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetImageService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
