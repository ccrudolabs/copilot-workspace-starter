# Configuración de GitHub

1. Crea o abre tu repositorio en GitHub.
2. Desde esta carpeta, ejecuta:
   git init
   git add .
   git commit -m "Initial workspace setup"
   git remote add origin <URL_DEL_REPOSITORIO>
   git push -u origin main

3. Usa ramas separadas para desarrollo, QA y producción.
4. Mantén la configuración sensible en archivos .env locales y no los subas al repositorio.
