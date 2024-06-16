import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { MangaService } from './api.service';

@Component({
  selector: 'app-manga-list',
  template: `
    <ul>
      <li *ngFor="let manga of mangas">{{ manga.attributes.title }}</li>
    </ul>
  `,
})
export class MangaListComponent implements OnInit {
  mangas: any[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.mangaService.getMangas().subscribe((data: any) => {
      this.mangas = data.data; console.log(data);
    });
  }
}