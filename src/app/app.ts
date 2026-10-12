import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Carrito } from './carrito/carrito';
import { DashboardComponent } from './dashboard/dashboard';
import { Home } from './home/home';
import { MiCuenta } from './mi-cuenta/mi-cuenta';
import { NotFoundComponent } from './not-found/not-found';
import { Ofertas } from './ofertas/ofertas';
import { Productos } from './productos/productos';
import { Tienda } from './tienda/tienda';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Carrito, DashboardComponent, Home, MiCuenta, NotFoundComponent, Ofertas, Productos, Tienda],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('powerfit-market');
}
