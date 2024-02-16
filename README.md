# Blog Personal Nest

Este es un proyecto de blog personal desarrollado con NestJS.

## Descripción

Este proyecto es un blog personal desarrollado utilizando el framework NestJS, que permite a los usuarios **crear**, **leer**, **actualizar** y **eliminar** **publicaciones**. Utiliza una arquitectura modular y está diseñado siguiendo los principios de RESTful API.

## Funcionalidades

- Crear una nueva publicación
- Leer una publicación existente
- Actualizar una publicación existente
- Eliminar una publicación existente

## Tecnologías utilizadas

- NestJS
- TypeScript
- UUID

## Instalación

1. Clona este repositorio: `git clone https://github.com/statick88/blogpersonalnest`
2. Instala las dependencias: `npm install`

## Uso

1. Inicia el servidor de desarrollo: `npm run start:dev`
2. Realiza las peticiones HTTP utilizando tu herramienta favorita como Thunder Client.

## Endpoints

- `GET /posts`: Obtener todas las publicaciones
- `GET /posts/:id`: Obtener una publicación por su ID
- `POST /posts`: Crear una nueva publicación
- `PUT /posts/:id`: Actualizar una publicación existente
- `DELETE /posts/:id`: Eliminar una publicación existente

## Mejoras Futuras

- [❌] Implementación de comentarios en las publicaciones.
- [❌] Agregar autenticación y autorización para proteger las rutas y los recursos.
- [❌] Mejorar la validación de datos en las solicitudes POST y PUT.

## Sugerencia

¡Antes de clonar o realizar un fork de este repositorio, te animamos a que intentes crear el proyecto desde cero siguiendo el [tutorial](tutorial.md)!

## Contribuyendo

¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia, mejora o corrección, por favor crea un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
