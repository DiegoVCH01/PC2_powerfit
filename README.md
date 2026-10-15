# PowerFit Market

PowerFit Market es un proyecto e-commerce desarrollado para el curso de JavaScript Avanzado.

La aplicación está orientada a la venta de suplementos, ropa, accesorios y equipamiento deportivo. El proyecto fue desarrollado con Angular y utiliza JSON Server para simular una API REST y almacenar los datos utilizados por la aplicación.

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Bootstrap
- Bootstrap Icons
- JSON Server
- LocalStorage
- RxJS

## Funcionalidades principales

El proyecto cuenta con las siguientes páginas y funcionalidades:

- Inicio
- Tienda
- Productos
- Ofertas
- Contacto
- Carrito de compras
- Login
- Mi Cuenta
- Dashboard
- Página 404 personalizada

También se implementaron:

- Búsqueda y filtrado de productos
- Consumo de datos mediante servicios de Angular
- Carrito almacenado en LocalStorage
- Inicio y cierre de sesión
- Manejo de múltiples usuarios
- Historial de compras por usuario
- Edición de datos del perfil
- Dashboard con información y estadísticas del usuario
- Diseño responsive con Bootstrap

## Usuarios de prueba

Para probar el inicio de sesión se pueden utilizar las siguientes cuentas:

### Usuario 1

```text
Correo: carlos.mendoza@email.com
Contraseña: 123456
```

### Usuario 2

```text
Correo: diego@powerfit.com
Contraseña: 456123
```

---

## Development server

Primero instala las dependencias del proyecto:

```bash
npm install
```

Para iniciar el servidor de Angular:

```bash
ng serve
```

Una vez iniciado, abre el navegador en:

```text
http://localhost:4200/
```

La aplicación se actualizará automáticamente cuando se realicen cambios en los archivos del proyecto.

## JSON Server

El proyecto utiliza JSON Server como base de datos simulada.

En una segunda terminal ejecuta:

```bash
npx json-server db.json --port 3000
```

La API estará disponible en:

```text
http://localhost:3000
```

Por lo tanto, para trabajar con el proyecto normalmente se deben tener dos terminales abiertas:

```text
Terminal 1 → ng serve
Terminal 2 → npx json-server db.json --port 3000
```

## Code scaffolding

Angular CLI incluye comandos para generar componentes y otros elementos del proyecto.

Para crear un nuevo componente:

```bash
ng generate component nombre-componente
```

Para ver todos los elementos disponibles:

```bash
ng generate --help
```

## Building

Para compilar el proyecto:

```bash
ng build
```

Los archivos generados se almacenarán en la carpeta:

```text
dist/
```

## Running unit tests

Para ejecutar las pruebas unitarias:

```bash
ng test
```

## Estructura general

Dentro de `src/app` se encuentran los componentes principales de la aplicación y la carpeta `services`, donde se maneja la lógica compartida y el acceso a los datos.

El archivo:

```text
db.json
```

contiene los productos, usuarios, historial de compras y demás información utilizada por JSON Server.

## Additional Resources

Para más información sobre Angular CLI puedes consultar la documentación oficial:

https://angular.dev/tools/cli