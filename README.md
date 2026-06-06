# GH-300 GitHub Copilot Certification Study Hub

Material profesional de estudio para GitHub Copilot, GitHub, DevOps, DevSecOps y adopcion de IA en equipos IT.

Autor: **Carlos Crudo**  
Sitio publicado: [ccrudolabs.github.io/copilot-workspace-starter](https://ccrudolabs.github.io/copilot-workspace-starter/)  
Perfil profesional: [LinkedIn](https://www.linkedin.com/in/carloscrudo/) · [Blog](https://carloscrudo.com/)

## Proposito

Este repositorio funciona como hub publico de aprendizaje para profesionales IT que quieren estudiar GH-300 con criterio tecnico, gobierno, seguridad y practica real. El foco no es solo aprobar un examen: es entender como adoptar GitHub Copilot con control, trazabilidad, buenas practicas y vision enterprise.

## Que incluye

- Sitio estatico profesional publicado con GitHub Pages.
- Ruta de estudio para GitHub Copilot y GH-300.
- Laboratorios practicos organizados por tema.
- Simulador de examen sin exponer la clave de respuestas.
- Arquitectura Enterprise 360 de GitHub Copilot con enfoque en personas, agentes, seguridad, costos, ROI y gobierno.
- Referencias oficiales de Microsoft Learn y GitHub Docs.
- Credenciales Microsoft 2026 y certificado MIT de IA generativa como respaldo de trayectoria profesional.

## Credenciales destacadas

- Microsoft: Protect AI and Apps with MDC - Project Ready Proficient 2026.
- Microsoft: Azure Migrate and Modernize - Sales Ready Proficient 2026.
- Microsoft: Threat Protection capabilities with M365 E5 - Sales Ready Proficient 2026.
- MIT Professional Education: Inteligencia Artificial Generativa Aplicada a la Transformacion Digital.

## Repositorio como portfolio tecnico

Este proyecto busca mostrar una forma profesional de publicar contenido tecnico:

- documentacion clara y navegable,
- contenido versionado,
- separacion entre sitio, laboratorios y recursos,
- GitHub Pages con despliegue por Actions,
- material descargable controlado,
- footer de confianza con autor, credenciales y canales publicos,
- sanitizacion de secretos simulados en laboratorios.

## Estructura principal

```text
site/
  index.html
  simulador-examen.html
  teoria-github-copilot.html
  lab-00-*.html ... lab-23-*.html
  assets/
docs/
src/
tests/
.github/workflows/
```

## Buenas practicas aplicadas

- GitHub Pages se publica desde workflow dedicado.
- Las credenciales de ejemplo en laboratorios se publican como placeholders seguros.
- El material de estudio separa teoria, laboratorios y simulacion.
- El contenido publico evita exponer respuestas de examen.
- El sitio enlaza fuentes oficiales cuando se tratan temas de seguridad, Zero Trust y gobierno.

## Recomendaciones para evolucionar

- Estandarizar la rama principal a `main` en una ventana controlada.
- Crear el repositorio de perfil `ccrudolabs/ccrudolabs` para mostrar un README global en GitHub.
- Agregar una licencia o aviso de uso segun la estrategia de publicacion: contenido abierto, uso educativo o todos los derechos reservados.
- Activar reglas de proteccion de rama para PRs y revisiones antes de mergear.
- Mantener `SECURITY.md`, `CONTRIBUTING.md` y `NOTICE.md` actualizados.

## Uso local

El sitio es HTML estatico. Puede abrirse directamente desde `site/index.html` o servirse con Live Server.

## Autor y derechos

Material preparado por Carlos Crudo. Ver [NOTICE.md](NOTICE.md) para condiciones de autoria, referencias y uso del contenido.
