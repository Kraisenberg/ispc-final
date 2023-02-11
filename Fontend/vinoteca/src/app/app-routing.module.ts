import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { RoleGuard } from './components/guards/role.guard';
import { DetalleComponent } from './components/users/detalle/detalle.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { RegistrousuarioComponent } from './components/users/registrousuario/registrousuario.component';
import { UsersComponent } from './components/users/users/users.component';

const routes: Routes = [
  
  {path:'usuarios', component: UsersComponent, pathMatch:'full' },
  {path:'usuarios/page/:page', component: UsersComponent, pathMatch: 'full' },
  {path:'guardar', component: RegisterComponent , canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_ADMIN'}  },
  {path:'guardar/:id', component: RegisterComponent , canActivate:[AuthGuard, RoleGuard], data: {role:'ROLE_ADMIN'} },
  {path:'login', component: LoginComponent },
  {path:'registro', component: RegistrousuarioComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
