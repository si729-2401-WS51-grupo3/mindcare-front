import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from "../../../shared/components/base-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { SignUpRequest } from "../../model/sign-up.request";
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { NgIf } from "@angular/common";
import { ProfileService } from "../../services/profile.service";
import { SignUpProfileRequest } from "../../model/sign-up-profile.request";
import { SignUpResponse } from "../../model/sign-up.response";
import {calcProjectFileAndBasePath} from "@angular/compiler-cli";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatCardTitle,
    MatError,
    NgIf
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private router: Router, private builder: FormBuilder, private authenticationService: AuthenticationService, private profileService: ProfileService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      dni: ['', Validators.required],
      phone: ['', Validators.required],
      photoUrl: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    const signUpRequest = new SignUpRequest(this.form.value.email, this.form.value.password);

    this.authenticationService.signUp(signUpRequest).subscribe({
      next: (response: SignUpResponse) => {
        const signUpProfileRequest = new SignUpProfileRequest(
          response.id.toString(),
          this.form.value.name,
          this.form.value.lastName,
          this.form.value.email,
          this.form.value.dni,
          this.form.value.phone,
          this.form.value.photoUrl
        );
        console.log("Sign up profile request");
        console.log(signUpProfileRequest);
        this.profileService.createProfile(signUpProfileRequest).subscribe({
          next: (response) => {
            this.router.navigate(['/sign-in']).then();
          },
          error: (error) => {
            console.error(`Error while signing up: ${error}`);
            this.router.navigate(['/sign-up']).then();
          }
        });
        this.submitted = true;
        console.log(this.submitted);
      },
      error: (error) => {
        console.error(`Error while signing up: ${error}`);
      }
    });
  }
}
