import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/users/detalle/detalle.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { UsersComponent } from './components/users/users/users.component';

const routes: Routes = [
  
  {path:'usuarios', component: UsersComponent, pathMatch:'full' },
  {path:'usuarios/page/:page', component: UsersComponent, pathMatch: 'full' },
  {path:'registro', component: RegisterComponent},
  {path:'registro/:id', component: RegisterComponent },
  {path:'login', component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
