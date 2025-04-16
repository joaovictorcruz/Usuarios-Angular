import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { SucessComponent } from './pages/sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    UsuarioFormComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
