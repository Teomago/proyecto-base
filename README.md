# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

## Prompt para Documentación Continua

1. **Fase Completada**: Cuando completes una fase o lo indique explícitamente, agrega al `README.md` una sección que documente los pasos realizados.
2. **Formato**:
   - Título de la sección: Debe reflejar la fase completada (e.g., "Instalación de HeroUI", "Configuración de Autenticación").
   - Descripción: Breve introducción sobre lo que se logró en esta fase.
   - Pasos: Lista detallada de comandos, configuraciones y archivos modificados.
   - Verificación: Instrucciones para probar que la fase funciona correctamente.
3. **Estructura**:
   - Usa encabezados `###` o `####` para mantener consistencia con el resto del archivo.
   - Incluye ejemplos de código o comandos en bloques de código.
   - Asegúrate de que el contenido sea claro y fácil de seguir.
4. **Ubicación**: Agrega la nueva sección al final del archivo `README.md`, justo después de la última fase documentada.

# Proyecto Base

Este proyecto utiliza **Payload CMS** y **Tailwind CSS** como base para el desarrollo de aplicaciones web modernas.

## Instalación de Tailwind CSS

1. Asegúrate de tener `Node.js` y `pnpm` instalados en tu sistema.
2. Instala las dependencias del proyecto:

   ```bash
   pnpm install
   ```

3. Configura Tailwind CSS:
   - El archivo de configuración de Tailwind CSS se encuentra en `tailwind.config.js`.
   - Asegúrate de que las rutas de contenido estén correctamente configuradas para procesar las clases CSS.

4. Ejecuta el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
- `payload.config.ts`: Configuración principal de Payload CMS.
- `tailwind.config.js`: Configuración de Tailwind CSS.

## Payload CMS

Payload CMS es un CMS headless que permite gestionar contenido dinámico y relaciones complejas en la base de datos. Este proyecto utiliza Payload CMS para:

- **Gestión de contenido**: Crear y administrar colecciones de datos.
- **Autenticación**: Manejo de usuarios y roles.
- **API REST y GraphQL**: Exponer datos para el front-end.

Para más información, visita la [documentación oficial de Payload CMS](https://payloadcms.com/docs).

## Instalación de HeroUI

HeroUI se integró en este proyecto para proporcionar componentes de interfaz de usuario modernos y personalizables. A continuación, se describen los pasos realizados para su instalación y configuración:

#### Descripción
Se instaló HeroUI junto con Tailwind CSS para mejorar la experiencia de desarrollo del front-end. Se configuró el proveedor de HeroUI en el layout principal del proyecto.

#### Pasos
1. **Instalación de Dependencias**:
   - Se instalaron las dependencias necesarias utilizando `npm`:
     ```bash
     npm install @heroui/react framer-motion
     ```

2. **Configuración de `.npmrc`**:
   - Se agregó la siguiente línea al archivo `.npmrc` para permitir el hoisting de los paquetes de HeroUI:
     ```
     public-hoist-pattern[]=@heroui/*
     ```
   - Luego, se ejecutó el siguiente comando para instalar las dependencias con `pnpm`:
     ```bash
     pnpm install
     ```

3. **Solución de Errores de `pnpm`**:
   - Para solucionar el error `ERR_PNPM_NO_GLOBAL_BIN_DIR`, se actualizó `pnpm` utilizando `npm`:
     ```bash
     npm install -g pnpm
     ```
   - Posteriormente, se ejecutó:
     ```bash
     pnpm setup
     ```
   - Fue necesario cerrar y volver a abrir VSCode para aplicar los cambios.

4. **Configuración de Tailwind CSS**:
   - Se actualizó el archivo `tailwind.config.js` para incluir las rutas de HeroUI:
     ```javascript
     module.exports = {
       content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
       theme: {
         extend: {},
       },
       darkMode: 'class',
       plugins: [require('@heroui/react')],
     };
     ```

5. **Configuración del Proveedor de HeroUI**:
   - Se agregó el `HeroUIProvider` en el archivo `layout.tsx` del front-end para que envuelva toda la aplicación:
     ```tsx
     import { HeroUIProvider } from '@heroui/react';

     export default function RootLayout({ children }: { children: React.ReactNode }) {
       return (
         <html lang="en">
           <body>
             <HeroUIProvider>
               {children}
             </HeroUIProvider>
           </body>
         </html>
       );
     }
     ```

6. **Prueba de Componentes**:
   - Se probó el funcionamiento de HeroUI creando un componente `Card` en la página principal (`page.tsx`).

7. **Optimización de Estilos**:
   - Se eliminaron los estilos personalizados de `styles.css`, dejando únicamente las importaciones de Tailwind CSS:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```
   - Los estilos de la página principal se tradujeron a clases de Tailwind CSS.

#### Verificación
- Para verificar que HeroUI está funcionando correctamente:
  1. Inicia el servidor de desarrollo:
     ```bash
     pnpm dev
     ```
  2. Abre la aplicación en el navegador y verifica que los componentes de HeroUI se renderizan correctamente.
  3. Asegúrate de que los estilos de Tailwind CSS se aplican correctamente en toda la aplicación.

## Notas

Este proyecto está diseñado para ser una base flexible y extensible para diferentes tipos de aplicaciones web.

