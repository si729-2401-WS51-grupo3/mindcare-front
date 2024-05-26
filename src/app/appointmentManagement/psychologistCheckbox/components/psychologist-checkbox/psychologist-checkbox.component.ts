import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-psychologist-checkbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './psychologist-checkbox.component.html',
  styleUrl: './psychologist-checkbox.component.css'
})
export class PsychologistCheckboxComponent {
  toppings = this._formBuilder.group({
    programadas: false,
    confirmadas: false,
    canceladas: false,
    primerasSesiones: false,

  });
  constructor(private _formBuilder: FormBuilder) {}
}
