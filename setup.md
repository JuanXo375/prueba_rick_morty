# Configuración del Proyecto

Este documento proporciona instrucciones para ejecutar el proyecto en modo de desarrollo y producción.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Instalación

Clona el repositorio y accede a la carpeta del proyecto:

```sh
git clone https://github.com/tu_usuario/tu_proyecto.git
cd tu_proyecto
```

Instala las dependencias:
```sh
npm install
# o si usas yarn
yarn install
```

## Modo Desarrollo
Para ejecutar el proyecto en modo de desarrollo, usa:
```sh
npm run dev
# o si usas yarn
yarn dev
```

## Modo Produccion
Para generar una versión optimizada para producción:

```sh
npm run build
# o con yarn
yarn build
```

Luego, puedes servir la aplicación con:

```sh
npm run preview
# o con yarn
yarn preview
```