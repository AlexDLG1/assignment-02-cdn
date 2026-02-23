# React + TypeScript + Vite

Esta plantilla proporciona una configuración mínima para trabajar con React en Vite, con recarga en caliente (HMR) y algunas reglas de ESLint.

Actualmente, hay dos plugins oficiales disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (o [oxc](https://oxc.rs) cuando se usa en [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

## Compilador de React

El compilador de React no está habilitado en esta plantilla debido a su impacto en el rendimiento durante el desarrollo y la compilación. Para agregarlo, consulta [esta documentación](https://react.dev/learn/react-compiler/installation).

## Ampliar la configuración de ESLint

Si estás desarrollando una aplicación para producción, se recomienda actualizar la configuración para habilitar reglas de lint con reconocimiento de tipos:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...

      // Elimina tseslint.configs.recommended y reemplázalo por esto
      tseslint.configs.recommendedTypeChecked,
      // Alternativamente, usa esto para reglas más estrictas
      tseslint.configs.strictTypeChecked,
      // Opcionalmente, agrega esto para reglas de estilo
      tseslint.configs.stylisticTypeChecked,

      // Otras configuraciones...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])

También puedes instalar eslint-plugin-react-x
 y eslint-plugin-react-dom
 para reglas de lint específicas de React:

// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Otras configuraciones...
      // Habilitar reglas de lint para React
      reactX.configs['recommended-typescript'],
      // Habilitar reglas de lint para React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // otras opciones...
    },
  },
])
])
```
EVIDENCIAS


![Captura 1](docs/b666c5bb-26e0-41b0-adde-fe859303e8d3.jpg)
![Captura 2](docs/image.png)
![Diagrama](docs/diagrama.png)
