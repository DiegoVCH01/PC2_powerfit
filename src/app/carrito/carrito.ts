import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../services/product';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit{
  productos: Producto[] = [];

  constructor(
    private cartService: Cart
  ) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.productos =
      this.cartService.obtenerProductos();
  }

  eliminarProducto(id: number | string): void {

    this.cartService.eliminarProducto(id);
    this.cargarCarrito();
  }
}
