import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  standalone: false
})
export class EditarComponent implements OnInit {
  usuarioForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.usuarioService.getUsuarioPorId(this.id).subscribe((usuario) => {
      this.usuarioForm.patchValue({
        name: usuario.name,
        email: usuario.email,
        senha: usuario.senha,
      });
    });
  }

  atualizarUsuario(): void {
    if (this.usuarioForm.valid) {
      const usuarioAtualizado = {
        id: this.id, // adiciona o ID ao corpo
        ...this.usuarioForm.value
      };
  
      this.usuarioService.atualizarUsuario(this.id, usuarioAtualizado)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }
}