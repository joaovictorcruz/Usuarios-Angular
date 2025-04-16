import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuarios';
import { Response } from '../models/response';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.apiUrl}/Usuario`;
  constructor( private http: HttpClient ) {  }

  CreateUsuario(usuario: Usuario) : Observable<Response<Usuario[]>>{
    return this.http.post<Response<Usuario[]>>(this.apiUrl, usuario);
  }

  LoginUsuario(credenciais: { email: string; senha: string }) {
    return this.http.post<any>(`${this.apiUrl}/login`, credenciais);
  }  
}   