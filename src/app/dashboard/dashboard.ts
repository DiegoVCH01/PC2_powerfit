import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Product, Producto } from '../services/product'; 
import { ContactService, MensajeContacto } from '../services/contact.service'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent implements OnInit { // Mantenemos tu nombre original DashboardComponent
  // 1. Variables de tu código original
  usuario: any = null;
  hoy = new Date();

  // 2. Variables para el inventario
  inventario: Producto[] = [];
  mensajes: MensajeContacto[] = [];
  cargando = true;

  totalProductos = 0;
  totalOfertas = 0;
  totalMensajes = 0;
  productosBajoStock = 0;

  constructor(
    private router: Router,
    private productService: Product,
    private contactService: ContactService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Verificamos la sesión primero (Tu lógica original)
    const datos = localStorage.getItem('usuario');
    console.log('Datos guardados:', datos);

    if (datos) {
      this.usuario = JSON.parse(datos);
      console.log('Usuario cargado:', this.usuario);
      
      // Si el acceso es exitoso, cargamos las métricas y la tabla
      this.cargarInventario();
    } else {
      console.log('No hay sesión — redirigiendo al Home');
      this.router.navigate(['/']);
    }
  }

  // Función que trae los datos de la base de datos
  cargarInventario() {
    this.productService.getProductos().subscribe({
      next: (dataProductos) => {
        this.inventario = dataProductos;
        
        // Calculamos las métricas
        this.totalProductos = this.inventario.length;
        this.totalOfertas = this.inventario.filter(p => p.oferta).length;
        this.productosBajoStock = this.inventario.filter(p => p.stock < 5).length;

        this.cargando = false;
        this.cdr.markForCheck(); // Actualiza la pantalla
      },
      error: (err) => {
        console.error('Error cargando el inventario:', err);
        this.cargando = false;
        this.cdr.markForCheck();
      }
    });
  }

  // Tu función original para salir
  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}