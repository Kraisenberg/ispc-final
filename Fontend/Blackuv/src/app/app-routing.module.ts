import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/facturas/carrito.component';
import { DetalleFacturaComponent } from './componentes/facturas/detalle-factura.component';
import { CatalogoComponent } from './componentes/layout/catalogo/catalogo.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ListaProductosComponent } from './layout/lista-productos/lista-productos.component';

const routes: Routes = [
  {path:'login', component: LoginComponent, pathMatch:'full' },
  {path: 'registrarse', component: RegisterComponent, pathMatch: 'full'},
  {path: 'registrarse/:id', component: RegisterComponent, pathMatch: 'full'},
  {path: 'listausuarios', component: ListaUsuariosComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'facturas/:id', component: DetalleFacturaComponent, pathMatch: 'full'},
  {path: 'catalogo', component: CatalogoComponent, pathMatch: 'full'},
  {path: 'carrito', component: CarritoComponent, pathMatch: 'full'},
  {path: 'listaproductos', component: ListaProductosComponent, pathMatch: 'full'},
  {path: '', component: CatalogoComponent, pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
