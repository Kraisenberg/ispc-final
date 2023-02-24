import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/facturas/carrito.component';
import { DetalleFacturaComponent } from './componentes/facturas/detalle-factura.component';
import { CatalogoComponent } from './componentes/layout/catalogo/catalogo.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaypalCheckoutComponent } from './componentes/paypal-check-out/paypal-check-out.component';
import { RegisterComponent } from './componentes/register/register.component';
import { RegistroProductoComponent } from './componentes/registro-producto/registro-producto.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ListaProductosComponent } from './layout/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegisterComponent},
  { path: 'registrarse/:id', component: RegisterComponent},
  { path: 'listausuarios', component: ListaUsuariosComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'facturas/:id', component: DetalleFacturaComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'listaproductos', component: ListaProductosComponent},
  { path: 'registrarproducto', component: RegistroProductoComponent },
  { path: 'registrarproducto/:id', component: RegistroProductoComponent},
  { path: '**', component: CatalogoComponent, pathMatch: 'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
