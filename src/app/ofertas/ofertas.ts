import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product, Producto } from '../services/product';

@Component({
  selector: 'app-ofertas',
  imports: [CommonModule],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit{

  productos: Producto[] = [];
  categoriaSeleccionada = 'Todas';
  cargando = true;
  mensaje = '';

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data.filter(producto => producto.oferta);
        this.cargando = false;
      },

      error: (error) => {
        console.error('Error cargando ofertas:', error);
        this.cargando = false;
      }
    });
  }

  get ofertasFiltradas(): Producto[] {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.productos;
    }

    return this.productos.filter(
      producto => producto.categoria === this.categoriaSeleccionada
    );
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

  calcularPrecioOferta(producto: Producto): number {
    return producto.precio - (producto.precio * producto.descuento / 100);
  }

  calcularAhorro(producto: Producto): number {
    return producto.precio - this.calcularPrecioOferta(producto);
  }

  seleccionarProducto(producto: Producto): void {
    this.mensaje = `${producto.nombre} agregado correctamente`;
  }
}
