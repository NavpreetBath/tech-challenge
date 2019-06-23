import { Component, OnInit, OnChanges } from '@angular/core';
import { GetImageService } from '../services/getImageService';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
photo: any;
  constructor(private getImageService: GetImageService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.photo = this.getImageService.getPhoto(
      +this.route.snapshot.params['photoid']
    );
  }
  goBack() {
    this.location.back();
  }

}
