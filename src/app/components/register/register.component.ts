import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    instituteName: ['', Validators.required]
  })
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }
  get instituteName() {
    return this.registerForm.controls['instituteName'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }

  submitDetails() {
    const postData = { ...this.registerForm.value };

    this.authService.registerUser(postData as User).subscribe(
      response => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registro exitoso' });
        this.router.navigate(['login'])
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un error' });
      }
    )
  }

}