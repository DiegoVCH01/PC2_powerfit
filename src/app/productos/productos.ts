import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, Producto } from '../services/product';

@Component({
  selector: 'app-productos',
  imports: [ CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos: Producto[] = [];
  textoBusqueda = '';
  categoriaSeleccionada = 'Todas';
  cargando = true;
  mensaje = '';


  constructor(private productService: Product) {}
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

  seleccionarProducto(producto: Producto): void {
    this.mensaje =
      `${producto.nombre} seleccionado correctamente`;
  }
}
