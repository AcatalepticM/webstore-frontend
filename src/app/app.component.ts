import {Component, ViewChild} from '@angular/core';
import {WebstoreService} from './webstore/services/WebstoreService';
import {WebstoreComponent} from './webstore/webstore.component';
import {UsersService} from './webstore/services/UsersService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebstoreService, UsersService]
})
export class AppComponent {
  title = 'M WebStore';
  private collapsed = true;

  @ViewChild('webstoreC', {static: false})
  webstoreC: WebstoreComponent;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  reset() {
    this.webstoreC.reset();
  }

}
