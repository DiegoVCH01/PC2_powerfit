import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe], // ✅ CommonModule OBLIGATORIO para *ngIf
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit {
  usuario: any = null;
  hoy = new Date();

  constructor(private router: Router) {}

  ngOnInit() {
    // 🔍 Para depurar — abre la consola F12 y mira qué sale
    const datos = localStorage.getItem('usuario');
    console.log('Datos guardados:', datos);

    if (datos) {
      this.usuario = JSON.parse(datos);
      console.log('Usuario cargado:', this.usuario);
    } else {
      console.log('No hay sesión — redirigiendo al Home');
      this.router.navigate(['/']);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
