import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css'],
  standalone: false
})
export class UsuarioFormComponent {
  @Input() form!: FormGroup;
  @Input() titulo: string = 'Cadastrar';
  @Input() textoBotao: string = 'Cadastrar';

  @Output() onSubmit = new EventEmitter<void>();
  
  submitForm(): void {
    this.onSubmit.emit();
  }
}
