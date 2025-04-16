import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuarios';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: false
})
export class CadastroComponent implements OnInit {

  usuarioForm!: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(): void {
    if (this.usuarioForm.invalid) return;

    const usuario: Usuario = this.usuarioForm.value;
    this.usuarioService.CreateUsuario(usuario).subscribe({
      next: () => {
        console.log("Usuário criado com sucesso");
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error("Erro ao criar:", err);
      }
    });
  }
}
