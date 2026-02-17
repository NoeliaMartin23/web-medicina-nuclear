# Medicina Nuclear - Mantenimiento de Equipos

Página web sobre mantenimiento de equipos de Medicina Nuclear. Incluye información sobre equipamiento, materiales, protocolos, procedimientos y documentación técnica.

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS v4**
- **Lucide React** (iconos)

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Despliegue en GitLab Pages

El proyecto incluye un archivo `.gitlab-ci.yml` que automáticamente:

1. Instala dependencias
2. Construye el proyecto
3. Despliega en GitLab Pages

### Pasos para desplegar en GitLab:

1. Crea un nuevo proyecto en GitLab
2. **Importante**: Ajusta el `base` en `vite.config.ts` con el nombre de tu proyecto:
   ```typescript
   base: process.env.CI ? '/NOMBRE-DE-TU-PROYECTO/' : '/',
   ```
3. Sube este código al repositorio:
   ```bash
   git init
   git remote add origin https://gitlab.com/TU_USUARIO/NOMBRE-PROYECTO.git
   git add .
   git commit -m "Initial commit - Medicina Nuclear website"
   git push -u origin main
   ```
4. Ve a **Settings > Pages** en GitLab
5. El pipeline de CI/CD se ejecutará automáticamente
6. La página estará disponible en: `https://TU_USUARIO.gitlab.io/NOMBRE-PROYECTO`

## Despliegue en GitHub Pages

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que automáticamente construye y despliega.

### Pasos para desplegar en GitHub:

1. Crea un nuevo repositorio en GitHub
2. **Importante**: Ajusta el `base` en `vite.config.ts` con el nombre de tu repositorio:
   ```typescript
   base: process.env.CI ? '/nombre-repositorio/' : '/',
   ```
3. Sube el código:
   ```bash
   git init
   git remote add origin https://github.com/TU_USUARIO/nombre-repositorio.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
4. Ve a **Settings > Pages** en GitHub
5. En **Source** selecciona: **GitHub Actions**
6. El workflow se ejecutará automáticamente al hacer push
7. La página estará disponible en: `https://TU_USUARIO.github.io/nombre-repositorio`

## Desarrollo local SIN Docker (instalando Node.js)

Si prefieres no usar Docker y tienes Node.js 20+ instalado:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Estructura del proyecto

```
├── .gitlab-ci.yml          # Pipeline CI/CD para GitLab Pages
├── index.html              # Punto de entrada HTML
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración TypeScript
├── vite.config.ts          # Configuración de Vite
├── public/                 # Archivos estáticos
│   └── favicon.svg
└── src/
    ├── main.tsx            # Punto de entrada React
    ├── app/
    │   ├── App.tsx         # Componente principal
    │   └── components/     # Componentes de sección
    │       ├── Activities.tsx
    │       ├── Closure.tsx
    │       ├── Documentation.tsx
    │       ├── Equipment.tsx
    │       ├── Introduction.tsx
    │       ├── Material.tsx
    │       ├── Procedures.tsx
    │       ├── Protocols.tsx
    │       ├── References.tsx
    │       └── figma/
    │           └── ImageWithFallback.tsx
    └── styles/
        ├── index.css
        ├── fonts.css
        ├── tailwind.css
        └── theme.css
```
