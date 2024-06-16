import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Signup', url: '/signup', icon: 'log-in' },
    { title: 'Manga', url: '/landingpage', icon: 'heart' },
    { title: 'Aluno', url: '/resetpassword', icon: 'person' },
  ];
  public label = {}
  constructor() {}
}
