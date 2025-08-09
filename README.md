# project-sample

This project is built using the Nuxt ^3.17.7 framework and simulates the homepage of a simple online
store. The main goal is to get familiar with page creation, component usage, routing, Composition
API, and styling with SCSS in Nuxt 3.

## Structure

. assets/=> Contains SCSS, fonts, and other resources processed by Nuxt before build

. components/=> Reusable Vue components used across the project

. configs/=> Configuration files

. pages/=> Application pages. each file or folder here automatically becomes a route

. layouts/=> Page layouts (shared structures like header, footer, sidebars)

. plugins/=> Scripts that run before rendering the app (e.g., registering libraries or features)

. public/=> Static files (e.g., images, icons, and files directly accessible via URL)

. app.vue => Main application entry point

. nuxt.config.ts => Nuxt configuration file (modules, routes, plugins, global CSS, etc.)

. error.vue => Custom error page

## documentation

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more
information.
