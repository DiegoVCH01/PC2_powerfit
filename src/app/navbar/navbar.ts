import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Necesario para [class.show]
import { Cart } from '../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuAbierto = false;

  constructor(
    private cartService: Cart,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu(): void {
    this.menuAbierto = false;
  }

  get cantidadCarrito(): number {
    return this.cartService.obtenerCantidadTotal();
  }

  get sesionActiva(): boolean {

    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return localStorage.getItem('usuario') !== null;
  }
}