# Proyecto base para múltiples modelos y proyectos

Este workspace está preparado como base de trabajo para desarrollar, probar y comparar varios modelos o proyectos con una estructura ordenada.

## Estructura recomendada

- environments/dev: variables y configuración para desarrollo.
- environments/qa: variables y configuración para pruebas.
- environments/prd: variables y configuración para producción.
- docs: documentación y guías de uso.

## Buenas prácticas aplicadas

- separar configuraciones por entorno,
- mantener secretos fuera del repositorio,
- usar scripts específicos por entorno,
- documentar el flujo de GitHub.

## Comandos

- npm install
- npm run build
- npm start
- npm run dev
- npm run qa
- npm run prd

## GitHub

Consulta [docs/github-setup.md](docs/github-setup.md) para conectar este proyecto a tu repositorio GitHub.
