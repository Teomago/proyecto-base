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

## Configuración de Payload CMS con TailwindCSS

A continuación, se detalla el proceso que hemos seguido para configurar Payload CMS con TailwindCSS. Este paso a paso incluye comandos CLI, configuraciones necesarias y ajustes en los archivos.

---

#### **1. Crear un Proyecto Base con Payload CMS**
1. Instalar el CLI de Payload:
   ```bash
   npx create-payload-app@latest proyecto-base
   ```
   - Seleccionar la plantilla deseada (por ejemplo, "blank" o "blog").

2. Navegar al directorio del proyecto:
   ```bash
   cd proyecto-base
   ```

3. Instalar las dependencias:
   ```bash
   pnpm install
   ```

---

#### **2. Configurar TailwindCSS**
1. Instalar TailwindCSS y PostCSS:
   ```bash
   pnpm install tailwindcss@3.4.17 postcss@8.4.24 autoprefixer@10.4.14
   ```

2. Inicializar la configuración de TailwindCSS:
   ```bash
   npx tailwindcss init -p
   ```
   Esto generará los archivos `tailwind.config.js` y `postcss.config.js`.

3. Configurar `tailwind.config.js`:
   - Editar el archivo para incluir las rutas de los archivos de Payload y Next.js:
     ```js
     module.exports = {
       content: [
         './src/**/*.{js,ts,jsx,tsx}',
         './src/app/**/*.{js,ts,jsx,tsx}',
         './src/collections/**/*.ts',
         './src/app/(payload)/**/*.tsx',
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

4. Configurar `postcss.config.js`:
   - Asegurarse de que Tailwind y Autoprefixer estén configurados:
     ```js
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     }
     ```

5. Crear un archivo de estilos base:
   - En `src/app/(frontend)/styles.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

6. Importar los estilos en el frontend:
   - En `src/app/(frontend)/page.tsx`:
     ```tsx
     import './styles.css';
     ```

---

#### **3. Configurar TailwindCSS en el Área de Administración de Payload**
1. Crear un archivo SCSS para los estilos de administración:
   - En `src/app/(payload)/custom.scss`:
     ```scss
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

2. Configurar Payload para usar los estilos:
   - En `payload.config.ts`, agregar la referencia al archivo SCSS:
     ```ts
     import path from 'path';

     export default {
       admin: {
         css: path.resolve(__dirname, './app/(payload)/custom.scss'),
       },
       // ...otras configuraciones
     };
     ```

3. Asegurarse de que PostCSS procese los archivos SCSS:
   - Verificar que `postcss.config.js` esté configurado correctamente.

---

#### **4. Verificar el Funcionamiento**
1. Iniciar el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

2. Acceder al frontend y al panel de administración:
   - Frontend: `http://localhost:3000`
   - Admin: `http://localhost:3000/admin`

---

### Próximos Pasos: Instalación de HeroUI
Con TailwindCSS funcionando correctamente, el siguiente paso será instalar HeroUI y configurar sus componentes.
