import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  usuario = '';
  clave = '';
  mensajeError = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (!this.usuario.trim() || !this.clave.trim()) {
      this.mensajeError = 'Completa todos los campos';
      return;
    }

    if (this.usuario === 'admin@powerfit.com' && this.clave === '123456') {
      // ✅ GUARDAR EN LOCALSTORAGE
      const datosUsuario = {
        email: this.usuario,
        nombre: 'Administrador PowerFit',
      };
      localStorage.setItem('usuario', JSON.stringify(datosUsuario));
      console.log('Sesión guardada ✅'); // Mira en consola F12

      this.mensajeError = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.mensajeError = 'Usuario o contraseña incorrectos';
    }
  }
}
