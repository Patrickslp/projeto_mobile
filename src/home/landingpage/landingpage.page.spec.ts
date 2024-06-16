import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingpagePage } from './landingpage.page';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LandingpagePage', () => {
  let component: LandingpagePage;
  let fixture: ComponentFixture<LandingpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
