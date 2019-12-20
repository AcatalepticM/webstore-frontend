import {Component, OnInit, ViewChild} from '@angular/core';
import {WebstoreService} from './services/WebstoreService';
import {WebstoreComponent} from './webstore/webstore.component';
import {UserService} from './services/UserService';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebstoreService, UserService, AuthService]
})
export class AppComponent implements OnInit {
  title = 'M WebStore';
  private collapsed = true;
  isLoggedIn = false;

  constructor(private authService: AuthService) {  }
  ngOnInit() {
    this.isLogged();
  }

  logout() {
    this.isLoggedIn = false;
    this.authService.logout();
  }

  isLogged() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  @ViewChild('webstoreC', {static: false})
  webstoreC: WebstoreComponent;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  reset() {
    this.webstoreC.reset();
  }
}
