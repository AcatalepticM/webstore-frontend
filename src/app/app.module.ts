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

const routes: Routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'login/success', redirectTo: '/', pathMatch: 'full'},
  {path: 'store', component: WebstoreComponent},
  {path: 'products/:product.id', component: WebstoreComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'login'},
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
    AdminComponent
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
