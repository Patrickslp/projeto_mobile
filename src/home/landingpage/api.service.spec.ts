import { TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MangaService } from './api.service';

describe('MangaService', () => {
  let service: MangaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
