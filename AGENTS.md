# AGENTS.md

Guía compacta para agentes que trabajan en este repositorio. Solo hechos verificados y no obvios.

## Stack
- Sitio **Astro 6** con HTML estático renderizado **en el servidor** (`output: "server"`), desplegado en **Vercel** mediante `@astrojs/vercel`.
- Islas de **React 19** para interactividad (`@astrojs/react`).
- **Tailwind CSS v4** (CSS-first vía `@import "tailwindcss"` en `src/styles/globals.css`).
- El gestor de paquetes es **pnpm** (lockfile v9, `pnpm-workspace.yaml`, overrides de `pnpm` en package.json). No uses npm/yarn.

## Comandos
- `pnpm dev` / `pnpm build` / `pnpm preview` / `pnpm astro` — los únicos scripts npm que existen.
- **No hay script `test` ni test runner instalado** (no vitest/jest). No ejecutes `pnpm test`.
- **No hay scripts `lint`/`typecheck`.** Ejecútalos directamente:
  - Lint: `pnpm exec eslint .`
  - Typecheck: `pnpm exec astro check`
- Formateador: Prettier con `prettier-plugin-astro` (ver `.prettierrc`). Ejecutable vía `pnpm exec prettier --check .`.

## Convenciones / gotchas
- **Alias de rutas** (`tsconfig.json`): `@components/*`, `@layouts/*`. **No** existe el alias `@lib` — `src/lib/data.ts` se importa con ruta relativa (`../lib/data.js`).
- **`verbatimModuleSyntax: true`** — los imports solo de tipos deben usar `import type`; si no, fallan build/typecheck.
- **Los componentes React en `.astro` necesitan una directiva `client:*`** (p. ej. `client:visible`, `client:idle`). Sin ella se renderizan estáticos y pierden interactividad. Ver `CodeDisplay` (`client:visible`) y `AuthModal` (`client:idle`).
- **`[level].astro` y `levels.astro` declaran `export const prerender = false`** — se renderizan en el servidor, no se precompilan.
- **Trampa de Tailwind config:** `tailwind.config.ts` existe pero es un **archivo de estilo v3 y no se carga automáticamente en v4**. El estilo se controla por CSS (`globals.css`), no por esta config. Prefiere editar utilidades CSS antes que el archivo ts.
- **`astro.config.mjs`** usa `webAnalytics: { enabled: true }` (Vercel Web Analytics). No quites el adapter salvo que cambies el destino de despliegue.
- **`pnpm-workspace.yaml`** define `allowBuilds: esbuild: false, sharp: false`. Añadir dependencias nativas/de build puede bloquearse por esta política.

## Modelo de datos
- El contenido de los ejercicios vive en `src/lib/data.ts` como un único array `ejercicios: Ejercicio[]` (interfaz al inicio del archivo). Los 100 registros están hardcoded; no hay CMS ni DB.
- Los ejercicios tienen `nivel` (solo 1 o 2) y `dificultad` ("fácil"/"medio"). El nav enlaza a un Nivel 3 pero aún no existe data para él.

## Verificación antes de terminar
1. `pnpm exec astro check` (tipos)
2. `pnpm exec eslint .` (lint)
3. `pnpm build` (¿el build server funciona con el adapter de Vercel?)
No hay tests automatizados, así que build + revisión manual son las únicas barreras.

## SEO (implementado 2026-07)
- `public/robots.txt` permite rastreo total y apunta al sitemap.
- `public/sitemap.xml` es **estático** — actualízalo manualmente si se añaden rutas de nivel superior (p. ej. Nivel 3, `/about`).
- `Layout.astro` incluye: `<html lang="es">`, `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`), Twitter Cards, `<link rel="canonical">`, `<meta name="robots">`, y JSON-LD estructurado (`WebSite` + `WebPage`).
- Cada página (`index`, `levels`, `[level]`) pasa una `description` única al Layout.
- La URL canónica y OG usan `https://ejercicios-logica-programacion.vercel.app` como dominio base. Si el dominio cambia, actualizar en `Layout.astro` y `sitemap.xml`.
