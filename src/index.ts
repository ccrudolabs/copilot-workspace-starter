// Función principal que inicia la aplicación.
function main(): void {
  // Leemos el entorno actual desde la variable APP_ENV.
  const environment = process.env.APP_ENV ?? 'dev';

  // Mostramos el entorno y un mensaje base para validar la configuración.
  console.log(`Entorno activo: ${environment}`);
  console.log('Hola, este es el proyecto inicial en TypeScript.');
}

// Ejecutamos la función principal al iniciar el programa.
main();
