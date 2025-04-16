import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component'; 
import { SucessComponent } from './pages/sucess/sucess.component';

const router: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sucess', component: SucessComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
