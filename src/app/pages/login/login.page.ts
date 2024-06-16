import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getIonPageElement } from '@ionic/angular';
import { Auth } from 'firebase/auth';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { catchError } from 'rxjs';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFJspMSURAZ51wwKqYo9-H0j23pJajvho",
  authDomain: "projetofinal-b0bc4.firebaseapp.com",
  databaseURL: "https://projetofinal-b0bc4-default-rtdb.firebaseio.com",
  projectId: "projetofinal-b0bc4",
  storageBucket: "projetofinal-b0bc4.appspot.com",
  messagingSenderId: "228779688355",
  appId: "1:228779688355:web:16b1277ba00994b23fda16",
  measurementId: "G-NQV4N9ZC10"
};
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginComponent {
  
  private apiUrl = 'projetofinal-b0bc4.firebaseapp.com';

  email = 'email';
  password = 'password';
  errorMessage = 'error';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) { }

  async login() {
    
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/landingpage']);
    } catch {}} };