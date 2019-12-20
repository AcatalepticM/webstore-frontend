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
import {WebstoreService} from './services/WebstoreService';
import {HomeComponent} from './webstore/home/home.component';
import {RegistrationComponent} from './webstore/registration/registration.component';
import {LoginComponent} from './webstore/login/login.component';
import {UserService} from './services/UserService';
import { AdminComponent } from './webstore/admin/admin.component';
import {AuthGuard} from './auth.guard';
import { ErrorComponent } from './webstore/error/error.component';
import {AuthService} from './services/auth.service';

const routes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: '404', component: ErrorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'logout', redirectTo: '', pathMatch: 'full'},
  {path: 'store', component: WebstoreComponent},
  {path: 'products/:product.id', component: WebstoreComponent},
  {path: 'products', component: WebstoreComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '404'},
];


@NgModule({
  declarations: [
    AppComponent,
    WebstoreComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [WebstoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
