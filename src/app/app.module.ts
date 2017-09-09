import { AdminauthguardService } from './admin/adminauthguard.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';



import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import Angular Module
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
//import Angularfire Auth
import{AngularFireAuthModule} from 'angularfire2/auth';
//Routes
import{RouterModule} from '@angular/router';




//ngBootstap
import{ NgbModule } from '@ng-bootstrap/ng-bootstrap';



//import Pages
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { ProductsComponent } from './pages/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrderComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
     {path:'', component:HomeComponent},
     {path:'app-products', component:ProductsComponent},
     {path:'app-shopping-cart',component:ShoppingCartComponent,canActivate:[AuthGuardService]},
     {path:'app-login',component:LoginComponent},


     {path:'app-myorders',component:MyordersComponent,canActivate:[AuthGuardService]},
     {path:'app-checkout',component:CheckoutComponent,canActivate:[AuthGuardService] },
     
     {path:'app-admin/products',component:AdminProductsComponent,canActivate:[AdminauthguardService]},
     {path:'app-admin/orders',component:AdminOrderComponent,canActivate:[AdminauthguardService]}
     
    

    ])
  ],
  providers: [AuthService,AuthGuardService,UserService,AdminauthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
