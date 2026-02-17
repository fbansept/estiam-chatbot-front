import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    MatInputModule, 
    MatButtonModule, 
    FormsModule, 
    ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);

  formulaire = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmitLogin() {
    console.log('tentative de connexion');

    if (this.formulaire.valid) {
      this.httpClient
        .post('http://localhost:8080/login', this.formulaire.value, { responseType: 'text' })
        .subscribe((reponse) => console.log(reponse));
    }
  }
}
