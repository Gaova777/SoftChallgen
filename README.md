# Proyecto de Gestión de Clientes

Este proyecto es una aplicación de gestión de clientes construida con **React** y **Vite**. Proporciona una interfaz intuitiva para visualizar, agregar, editar y eliminar información de clientes, con funcionalidades de búsqueda y un diseño moderno y responsivo.

## Características

- Visualización de la lista de clientes.
- Funcionalidad de búsqueda para encontrar clientes fácilmente.
- Opciones para agregar, editar y eliminar clientes.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **CSS3**: Para estilos y diseño responsivo.

## Prerrequisitos

Asegúrate de tener **Node.js** y **npm** instalados. Puedes verificar si están instalados ejecutando estos comandos en la terminal:

```bash
node -v
npm -v

# Clonar el Repositorio
https://gitlab.com/cgarcia6/prueba-soft-front.git

cd proyecto
npm install


# Scripts Disponibles
npm run dev
Inicia el servidor de desarrollo para ver la aplicación en un entorno local. Por defecto, la aplicación estará disponible en http://localhost:5173.

npm run build
Construye una versión optimizada de la aplicación para producción en la carpeta dist.

npm run preview
Sirve una vista previa local de la versión de producción de la aplicación. Útil para verificar cómo se verá el proyecto antes de desplegarlo.

npm run lint
Ejecuta un linter (si está configurado) para analizar el código y asegurar que siga las mejores prácticas y el estilo de código deseado.

## Estructura del Proyecto

A continuación, se describe la estructura básica del proyecto:

prueba-soft
├── node_modules         # Dependencias del proyecto
├── public               # Archivos públicos (favicon, manifest, etc.)
├── src                  # Código fuente de la aplicación
│   ├── assets           # Archivos de imágenes y estilos
│   ├── components       # Componentes reutilizables de React
│   ├── App.css          # Estilos generales de la aplicación
│   ├── App.tsx          # Componente principal de la aplicación
│   ├── index.css        # Estilos globales
│   ├── main.tsx         # Archivo de entrada de la aplicación
│   └── vite-env.d.ts    # Definiciones de tipos para Vite
├── .gitignore           # Archivos y carpetas a ignorar por Git
├── eslint.config.js     # Configuración de ESLint para la calidad del código
├── index.html           # Archivo HTML principal de la aplicación
├── package-lock.json    # Archivo de bloqueo de dependencias de npm
├── package.json         # Información del proyecto y dependencias
├── README.md            # Documentación del proyecto
├── tsconfig.app.json    # Configuración específica de TypeScript para la aplicación
├── tsconfig.json        # Configuración principal de TypeScript
├── tsconfig.node.json   # Configuración de TypeScript para Node
└── vite.config.ts       # Configuración de Vite

Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama con tu mejora: git checkout -b mi-mejora.
Realiza tus cambios y haz un commit: git commit -m 'Agrega mi mejora'.
Sube tus cambios a tu fork: git push origin mi-mejora.
Abre un pull request en GitLab.