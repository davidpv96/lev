# LEV - Biohacking, Epigenética y Nutrición

Proyecto web para LEV, enfocado en biohacking, epigenética y nutrición para transformar tu salud.

## 🚀 Tecnologías

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de utilidades CSS
- **React** - Para componentes interactivos
- **WordPress** - Headless CMS (backend)

## 🎨 Paleta de Colores

- **Primary**: `#6a2044` (R:106 G:32 B:68)
- **Secondary**: `#b29981` (R:178 G:153 B:129)
- **Neutral Light**: `#e4ded7` (R:228 G:222 B:215)
- **Neutral**: `#f6f0ea` (R:246 G:240 B:234)
- **Neutral Dark**: `#ffffff` (R:255 G:255 B:255)

## 🔤 Tipografías

- **Saudagar Regular** - Para títulos y encabezados (serif)
- **Blacker Sans Extralight** - Para texto general (sans-serif)

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 📝 Configuración de WordPress

1. Copia el archivo `.env.example` a `.env`
2. Configura la variable `PUBLIC_WORDPRESS_API_URL` con la URL de tu instalación de WordPress
3. Asegúrate de que tu WordPress tenga habilitada la API REST

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── fonts/          # Tipografías (SAUDAGAR y BLACKER SANS)
├── src/
│   ├── components/     # Componentes Astro/React
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── config/         # Configuraciones
│   │   └── wordpress.ts
│   ├── layouts/        # Layouts base
│   │   └── Layout.astro
│   ├── pages/          # Páginas
│   │   └── index.astro
│   └── styles/         # Estilos globales
│       └── global.css
└── package.json
```

## 📌 Notas Importantes

- Las tipografías deben colocarse en la carpeta `public/fonts/`
- Los archivos de fuentes deben tener los siguientes nombres:
  - `Saudagar-Regular.woff2` y `Saudagar-Regular.woff`
  - `BlackerSans-ExtraLight.woff2` y `BlackerSans-ExtraLight.woff`
  - `BlackerSans-ExtraLightItalic.woff2` y `BlackerSans-ExtraLightItalic.woff`



# lev
