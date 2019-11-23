import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { HomeNavbarComponent } from './components/homepage/home-navbar/home-navbar.component';
import { HomeContentComponent } from './components/homepage/home-content/home-content.component';
import { LoginComponent } from './components/homepage/login/login.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ProductService } from './services/product.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


import { ProductCardComponent } from './components/shared/product-card/product-card.component';
import { RegisterComponent } from './components/homepage/register/register.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { CustomerNavbarComponent } from './components/customers/customer-navbar/customer-navbar.component';
import { OrderComponent } from './components/customers/order/order.component';
import { MyOrdersComponent } from './components/customers/my-orders/my-orders.component';
import { ManagerComponent } from './components/managers/manager/manager.component';
import { CookComponent } from './components/cooks/cook/cook.component';
import { DeliveryPersonComponent } from './components/delivery-people/delivery-person/delivery-person.component';
import { SalespersonComponent } from './components/salespeople/salesperson/salesperson.component';
import { ManagerNavbarComponent } from './components/managers/manager-navbar/manager-navbar.component';
import { CartComponent } from './components/shared/cart/cart.component';
import { CheckoutComponent } from './components/shared/checkout/checkout.component';
import { ProfileComponent } from './components/customers/profile/profile.component';
import { ViewOrderComponent } from './components/customers/view-order/view-order.component';
import { EmployeesComponent } from './components/managers/employees/employees.component';
import { CustomersComponent } from './components/managers/customers/customers.component';
import { ViewEmployeeComponent } from './components/managers/view-employee/view-employee.component';
import { ViewCustomerComponent } from './components/managers/view-customer/view-customer.component';
import { ViewAllOrdersComponent } from './components/managers/view-all-orders/view-all-orders.component';
import { AddEmployeeComponent } from './components/managers/add-employee/add-employee.component';
import { AllOrdersComponent } from './components/managers/all-orders/all-orders.component';
import { GuestComponent } from './components/guests/guest/guest.component';
import { GuestNavbarComponent } from './components/guests/guest-navbar/guest-navbar.component';
import { GuestOrderComponent } from './components/guests/guest-order/guest-order.component';
import { CustomerCheckoutComponent } from './components/customers/customer-checkout/customer-checkout.component';
import { GuestCheckoutComponent } from './components/guests/guest-checkout/guest-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavbarComponent,
    HomeContentComponent,
    LoginComponent,
    MenuComponent,
    ProductCardComponent,
    RegisterComponent,
    CustomerComponent,
    CustomerNavbarComponent,
    OrderComponent,
    MyOrdersComponent,
    ManagerComponent,
    CookComponent,
    DeliveryPersonComponent,
    SalespersonComponent,
    ManagerNavbarComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    ViewOrderComponent,
    EmployeesComponent,
    CustomersComponent,
    ViewEmployeeComponent,
    ViewCustomerComponent,
    ViewAllOrdersComponent,
    AddEmployeeComponent,
    AllOrdersComponent,
    GuestComponent,
    GuestNavbarComponent,
    GuestOrderComponent,
    CustomerCheckoutComponent,
    GuestCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
