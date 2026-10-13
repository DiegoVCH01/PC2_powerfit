import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Definimos la estructura del Perfil del usuario
export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  clave: string;
  telefono: string;
  direccion: string;
  nivel: string;
  puntos: number;
  imagen: string;
}

// Definimos la estructura del Historial de compras
export interface Orden {
  id: string;
  fecha: string;
  descripcion: string;
  detalles: string;
  total: number;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Las rutas hacia tu db.json
  private userUrl = 'http://localhost:3000/perfil';
  private ordersUrl = 'http://localhost:3000/historial_compras';

  constructor(private http: HttpClient) { }

  // Función para traer los datos de Carlos Mendoza
  getPerfilUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.userUrl);
  }

  actualizarPerfil(
    datos: Partial<Usuario>
  ): Observable<Usuario> {
    return this.http.patch<Usuario>(
      this.userUrl,
      datos
    );
  }

  // Función para traer la lista de sus compras anteriores
  getHistorialCompras(): Observable<Orden[]> {
    return this.http.get<Orden[]>(this.ordersUrl);
  }
}