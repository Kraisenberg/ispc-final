import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './componentes/register/register.component';
import { LoginComponent } from './componentes/login/login.component';
import { NabarComponent } from './layout/nabar/nabar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DetalleFacturaComponent } from './componentes/facturas/detalle-factura.component';
import { CatalogoComponent } from './componentes/layout/catalogo/catalogo.component';
import { CarritoComponent } from './componentes/facturas/carrito.component';
import { ListaProductosComponent } from './layout/lista-productos/lista-productos.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PaypalCheckoutComponent } from './componentes/paypal-check-out/paypal-check-out.component';

//externos
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NabarComponent,
    ListaUsuariosComponent,
    DashboardComponent,
    DetalleFacturaComponent,
    CatalogoComponent,
    CarritoComponent,
    ListaProductosComponent,
    RegistroProductoComponent,
    FooterComponent,
    PaypalCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPayPalModule,
    //NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
