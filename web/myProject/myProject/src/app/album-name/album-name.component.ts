import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-name',
  templateUrl: './album-name.component.html',
  styleUrls: ['./album-name.component.scss']
})
export class AlbumNameComponent implements OnInit {
title= "Switch User";
  constructor() { }

  ngOnInit() {
  }

}
