import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { ProductComponent } from './components/products/product/product.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users/users.component'
import { UserserviceService } from './components/users/users/userservice.service';
import { RegisterComponent } from './components/users/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/users/login/login.component';
import { PaginatorComponent } from './components/layout/paginator/paginator.component';
import { DetalleComponent } from './components/users/detalle/detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ProductComponent,
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    PaginatorComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
 // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],

  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
