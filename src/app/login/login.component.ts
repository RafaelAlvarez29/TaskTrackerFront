import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    console.log('LoginComponent initialized');
    this.login = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  enviadodatos(): void {
    if (this.login.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente';
      return;
    }

    const { usuario, contraseña } = this.login.value;

    // Llama al servicio de autenticación
    this.authService.login(usuario, contraseña).subscribe({
      next: (response: { token: string }) => {
        // Si el login es exitoso
        console.log('Login exitoso:', response);

        localStorage.setItem('token', response.token); // Guarda el token en localStorage

        // Navega a la página de inicio
        this.router.navigate(['/inicio']);
      },
      error: (err: { error: { message: string } }) => {
        // Si hay un error, muestra el mensaje
        this.errorMessage = err.error.message || 'Error al iniciar sesión';
        console.error('Error al realizar el login:', err);

      },
    });
  }




  /*enviadodatos(): void {
    if (this.login.invalid) {
      this.errorMessage = 'Por favor, complete todos los campos correctamente';
      return;
    }

    const { usuario, contraseña } = this.login.value;

    // Llama al servicio de autenticación
    this.authService.login(usuario, contraseña).subscribe({
      next: (response: { token: string; }) => {
        // Guarda el token recibido en el localStorage
        localStorage.setItem('token', response.token);

        // Redirige al tablero principal
        this.router.navigate(['/inicio']);
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message || 'Error al iniciar sesión';
      },
    });

  }*/

}

