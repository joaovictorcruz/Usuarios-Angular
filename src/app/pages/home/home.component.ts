import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private router: Router ) {}

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res.dados; // Agora está pegando o array corretamente!
    });
  }
  
  editarUsuario(id: number) {
    this.router.navigate(['/editar', id]);
  }
  
  deletarUsuario(id: number): void {
    this.usuarioService.deletarUsuario(id).subscribe(() => {
      this.carregarUsuarios(); 
    });
  }
  
}
