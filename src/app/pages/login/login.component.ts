import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  erroLogin: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router){}

  ngOnInit(): void{
    this.loginForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    if (this.loginForm.invalid) return;
  
    const credenciais = this.loginForm.value;
    this.usuarioService.LoginUsuario(credenciais).subscribe({
      next: (res) => {
        if (res.sucesso) {
          this.router.navigate(['sucess']);
        } else {
          this.erroLogin = res.mensagem || 'E-mail ou senha incorretos';
        }
      },
      error: (err) => {
        console.error("Erro ao logar", err);
        this.erroLogin = 'Erro no servidor ao tentar logar';
      }
    });
  }
  
}
