# App Administration - Microfrontend

Este es un microfrontend (MFE) para la administración del sistema, basado en la arquitectura de `quotation-motor`.

## Estructura del Proyecto

```
app-administration/
├── config/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── public/
│   ├── index.html
│   └── color.less
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── layout/
│   │   │   ├── loader/
│   │   │   ├── route-component/
│   │   │   └── routes/
│   │   ├── containers/
│   │   └── pages/
│   │       └── home/
│   ├── contexts/
│   │   ├── actionsContext.js
│   │   ├── deviceContext.js
│   │   ├── menuContext.js
│   │   ├── stylesContext.js
│   │   └── translationContext.js
│   ├── styles/
│   │   └── variables.less
│   ├── utils/
│   │   ├── notificationToast.js
│   │   └── startup.json
│   ├── App.jsx
│   ├── bootstrap.js
│   ├── index.js
│   └── index.css
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── config-overrides.js
```

## Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:dev` - Construye la aplicación en modo desarrollo
- `npm run build:start` - Sirve la aplicación construida

## Configuración

El microfrontend está configurado para:
- Puerto: 3004 (configurable en webpack)
- Nombre del módulo: `appadministration`
- Exposición: `./AppAdministrationApp`

## Contextos

- **TranslationContext**: Manejo de traducciones
- **MenuContext**: Gestión de menús y rutas
- **ActionsContext**: Control de acciones y permisos
- **DeviceContext**: Detección de dispositivos
- **StylesContext**: Gestión de estilos dinámicos

## Componentes Principales

- **Layout**: Sistema de layout con header, sidebar y contenido principal
- **Home**: Página principal con estadísticas y acciones rápidas
- **Routes**: Sistema de enrutamiento basado en configuración de menú

## Dependencias Principales

- React 18.2.0
- Ant Design 4.21.4
- React Router DOM 5.2.0
- Styled Components 5.3.5
- Axios 1.6.2

## Desarrollo

1. Instalar dependencias: `npm install`
2. Iniciar servidor de desarrollo: `npm start`
3. La aplicación estará disponible en `http://localhost:3004`

## Construcción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos construidos se generarán en la carpeta `dist/`.
