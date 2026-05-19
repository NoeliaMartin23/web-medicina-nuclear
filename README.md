# Gestión Integral del Servicio de Medicina Nuclear

Página web sobre mantenimiento de equipos de Medicina Nuclear. Incluye información sobre equipamiento, materiales, protocolos, procedimientos y documentación técnica.

## Tecnologías

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Lucide React**

## Desarrollo local

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Despliegue en GitHub Pages

El proyecto incluye un workflow de GitHub Actions en `.github/workflows/deploy.yml`.

### Requisitos

1. El repositorio debe usar la rama `main`.
2. En **Settings → Pages**, la fuente debe ser **GitHub Actions**.
3. El workflow construye el proyecto con Node 20 y publica `dist/`.

### Base path

La base de Vite se resuelve automáticamente así:

- `VITE_BASE_PATH` si está definida
- `/${repo}/` en CI
- `/` en local

Por tanto, para GitHub Pages **NO hace falta editar manualmente** `vite.config.ts` cuando el repositorio cambia de nombre, salvo que quieras forzar un path distinto.

## Estructura del proyecto

```text
├── .github/workflows/deploy.yml
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── favicon.svg
│   └── images/
└── src/
    ├── main.tsx
    ├── assets/
    ├── app/
    │   ├── App.tsx
    │   ├── searchTypes.ts
    │   └── components/
    └── styles/
```
