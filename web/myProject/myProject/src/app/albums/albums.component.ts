import { Component, OnInit,OnChanges, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GetImageService} from '../services/getImageService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnChanges {
  title="Gallery";
  photos : any[] = [];
  user: any;
  @Input() filterBy? :string = 'all';
 

    constructor(private getImageService: GetImageService, private route: ActivatedRoute) {
    }

    ngOnChanges(){
      this.user = this.getImageService.getUsers(
        +this.route.snapshot.params['id']
      );
    }
    ngOnInit() {
      this.user = this.getImageService.getUsers(
        +this.route.snapshot.params['id']
      );
    }


}
