import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component'; 
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';

const router: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}, 
  {path: 'editar/:id', component: EditarComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
