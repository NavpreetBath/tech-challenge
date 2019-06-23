import { Component, OnChanges } from '@angular/core';
import { GetImageService } from '../services/getImageService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnChanges {
  users : any[] = [];
  selectedUser;
  constructor(private getImageService: GetImageService, private route: Router) {
    this.users = this.getImageService.getPhotos();
  }

  ngOnChanges(){
    this.users = this.getImageService.getPhotos();
  }
selected()
{
  this.route.navigate(['albums/',this.selectedUser.id]);
}
}
