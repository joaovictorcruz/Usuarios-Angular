import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from '../../models/usuarios';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']  
})
export class CadastroComponent implements OnInit {
  
  @Output()onSubmit = new EventEmitter<Usuario>();
  usuarioForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(0), 
      name: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl('')
    });
  }

  submit(): void {
    this.onSubmit.emit(this.usuarioForm.value)
  }

}
