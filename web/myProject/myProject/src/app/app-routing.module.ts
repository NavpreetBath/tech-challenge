import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumsComponent} from './albums/albums.component';
import {PhotosComponent} from './photos/photos.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: "users", component: UsersComponent},
{path: "albums/:id", component: AlbumsComponent},
{path: "photo/:photoid", component: PhotosComponent},
{path:"", redirectTo: "/users", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
