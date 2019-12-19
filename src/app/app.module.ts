import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {WebstoreComponent} from './webstore/webstore.component';
import {ProductsComponent} from './webstore/products/products.component';
import {OrdersComponent} from './webstore/orders/orders.component';
import {ShoppingCartComponent} from './webstore/shopping-cart/shopping-cart.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebstoreService} from './webstore/services/WebstoreService';
import {HomeComponent} from './webstore/home/home.component';
import {UsersComponent} from './webstore/users/users.component';
import { LoginComponent } from './webstore/login/login.component';
import {UsersService} from './webstore/services/UsersService';

const routes: Routes = [
  {path: 'register', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'store', component: WebstoreComponent},
  {path: 'products', component: WebstoreComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}
  /*
  { path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  */
];

@NgModule({
  declarations: [
    AppComponent,
    WebstoreComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    UsersComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [WebstoreService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
