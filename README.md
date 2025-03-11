# Rick and Morty Explorer

Este proyecto es un **frontend web** que consume la API pública de **Rick and Morty** ([rickandmortyapi.com](https://rickandmortyapi.com/)). Permite consultar información sobre **personajes, episodios y ubicaciones**, aplicando filtros específicos para una búsqueda más precisa.

## 🚀 Funcionalidades
- Listado de personajes con filtros por **nombre, estado, especie, tipo y género**.
- Listado de episodios con detalles sobre los personajes que aparecen en ellos.
- Listado de ubicaciones con la posibilidad de ver los personajes que residen en cada una.
- Paginación para navegar entre los resultados de la API.

## 🛠️ Tecnologías utilizadas
- **React** con **TypeScript**
- **Bootstrap** para el diseño y estilos
- **Redux** para la gestión del estado global
- **React Router** para la navegación entre páginas

## 💡 Retos y aprendizajes
### ✅ Experiencia previa
Ya tenía experiencia desarrollando aplicaciones con **React, TypeScript y Bootstrap**, por lo que la implementación del frontend no fue un problema.

### 🤯 Desafíos enfrentados
1. **Diseñar una estructura eficiente de la aplicación**: 
   - El mayor reto fue **aprovechar las consultas de la API** para minimizar las peticiones innecesarias.

2. **Uso de GraphQL**:
   - Aunque ya había trabajado con GraphQL en un **único proyecto anterior**, su implementación en este fue más compleja de lo esperado por lo que tome la decisión de realizar la consultas por query parameters.
   - Me tomó tiempo entender **cómo estructurar las consultas para aprovecharlas al maximo posible**.

## 📦 Instalación y ejecución
### 1️⃣ Clonar el repositorio
```sh
 git clone https://github.com/JuanXo375/prueba_rick_morty.git
 cd prueba_rick_morty
```

### 2️⃣ Instalar dependencias
```sh
 npm install
```

### 3️⃣ Ejecutar el servidor de desarrollo
```sh
 npm run dev
```

## 📌 Mejoras futuras
- Optimización de **carga de imágenes** para mejorar el rendimiento.
- Implementación completa de **GraphQL** en lugar de REST.
- Implementación de memoria para consultas innecesarias.
- Mejoras en la **interfaz y experiencia de usuario**.

---
**🚀 Desarrollado con pasión por [Tu Nombre]**
