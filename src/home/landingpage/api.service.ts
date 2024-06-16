import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private apiUrl = 'https://api.mangadex.org/manga';

  constructor(private http: HttpClient) {}

  getMangas() {
    return this.http.get(this.apiUrl);
  }
}

