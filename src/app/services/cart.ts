import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Producto } from './product';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Cart {
   private storageKey = 'carrito';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  obtenerProductos(): Producto[] {

    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const carrito = localStorage.getItem(this.storageKey);

    return carrito
      ? JSON.parse(carrito)
      : [];
  }

  agregarProducto(producto: Producto): boolean {

    const carrito = this.obtenerProductos();

    const existe = carrito.some(
      item => String(item.id) === String(producto.id)
    );

    if (existe) {
      return false;
    }

    carrito.push(producto);

    this.guardarCarrito(carrito);

    return true;
  }

  eliminarProducto(id: number | string): void {

    const carrito = this.obtenerProductos();

    const carritoActualizado = carrito.filter(
      producto => String(producto.id) !== String(id)
    );

    this.guardarCarrito(carritoActualizado);
  }

  private guardarCarrito(carrito: Producto[]): void {

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify(carrito)
      );
    }
  }
}
