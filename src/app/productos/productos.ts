import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, Producto } from '../services/product';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-productos',
  imports: [ CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit{
  productos: Producto[] = [];
  textoBusqueda = '';
  categoriaSeleccionada = 'Todas';
  cargando = true;
  mensaje = '';


  constructor(private productService: Product, private cartService:Cart) {}
  ngOnInit(): void {
    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },

      error: (error) => {
        console.error('Error cargando productos:', error);
        this.cargando = false;
      }

    });

  }

  get productosFiltrados(): Producto[] {
    return this.productos.filter(producto => {
      const coincideNombre =
        producto.nombre
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === 'Todas' ||
        producto.categoria === this.categoriaSeleccionada;

      return coincideNombre && coincideCategoria;

    });

  }

  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.categoriaSeleccionada = 'Todas';

  }

  agregarAlCarrito(producto: Producto): void {

    const agregado =
      this.cartService.agregarProducto(producto);

    if (agregado) {
      this.mensaje =
        `${producto.nombre} agregado al carrito`;
    } else {
      this.mensaje =
        `${producto.nombre} ya está en el carrito`;
    }
  }
}
