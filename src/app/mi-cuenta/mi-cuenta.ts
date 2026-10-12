import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, Usuario, Orden } from '../services/user.service'; // Importamos el servicio

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta implements OnInit {
  // Variables para almacenar los datos de db.json
  perfil: Usuario | null = null;
  historial: Orden[] = [];
  cargando = true;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // 1. Obtenemos el perfil del usuario
    this.userService.getPerfilUsuario().subscribe({
      next: (dataPerfil) => {
        this.perfil = dataPerfil;
        
        // 2. Una vez cargado el perfil, obtenemos su historial de compras
        this.userService.getHistorialCompras().subscribe({
          next: (dataHistorial) => {
            this.historial = dataHistorial;
            this.cargando = false;
            this.cdr.markForCheck(); // Actualizamos la pantalla
          },
          error: (err) => {
            console.error('Error cargando historial de compras:', err);
            this.cargando = false;
            this.cdr.markForCheck();
          }
        });
      },
      error: (err) => {
        console.error('Error cargando perfil de usuario:', err);
        this.cargando = false;
        this.cdr.markForCheck();
      }
    });
  }
}