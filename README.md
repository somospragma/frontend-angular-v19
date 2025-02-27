# Angular 19 arquetipo

Arquetipo de angular 19 con ngrx para el almacenamiento de informacion en localhost, husky para precommits, eslint y prettier para el formateo del codigo.

Realizado por Kevin Zarama

## Descripcion del proyecto

Proyecto realizado con atomic design, las carpetas de componentes se encuentran en src/app/components

En la carpeta store se encuentran los archivos relacionados con el manejo del estado utilizando NgRx. Dentro de esta carpeta, se incluye un ejemplo básico de uso con un contador.

- El archivo app.state.ts define la interfaz del estado global de la aplicación.
- reducers.ts contiene los reducers que gestionan las acciones que se pueden realizar sobre el estado.
- Dentro de la carpeta counter, se encuentran los archivos específicos para gestionar el ciclo de vida del estado relacionado con el contador, que incluyen:
  - actions.ts: Define las acciones que pueden ser disparadas.
  - reducers.ts: Gestiona las transformaciones del estado en respuesta a las acciones.
  - state.ts: Contiene la estructura del estado específico del contador.
  - selectors.ts: Permite seleccionar y extraer partes específicas del estado del contador.

Este patrón de organización facilita el manejo modular y escalable del estado en aplicaciones Angular utilizando NgRx.

## Instalacion

```console
npm install
```

## Ejecucion

```console
ng serve
```

## Versiones de dependencias usadas

- Angular 19.0.7
- Eslint 9.18.0
- Husky 9.1.7
- Prettier 3.4.2
- Prettier-eslint 16.3.0
- Typescript-eslint 8.20.0
- Typescript 5.5.2
# frontend-angular-v19
