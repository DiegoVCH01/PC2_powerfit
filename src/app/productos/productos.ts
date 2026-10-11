import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, Producto } from '../services/product';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  textoBusqueda = '';
  categoriaSeleccionada = 'Todas';
  cargando = true;
  mensaje = '';


  constructor(private productService: Product, private cartService: Cart, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
        this.cdr.markForCheck();
      },

      error: (error) => {
        console.error(
          'Error cargando productos:',
          error
        );

        this.cargando = false;
        this.cdr.markForCheck();
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

  agregarAlCarrito(
    producto: Producto
  ): void {

    this.cartService
      .agregarProducto(producto);

    this.mensaje =
      `${producto.nombre} agregado al carrito`;
  }
}
