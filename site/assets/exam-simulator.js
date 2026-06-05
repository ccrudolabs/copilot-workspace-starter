(() => {
  const questions = [
  {
    "id": 1,
    "type": "Multiple",
    "topic": "Agent Mode / Contexto",
    "question": "Un desarrollador usa Copilot Agent Mode para tareas largas de migración de bases de datos, con seguimiento de cambios en varios archivos. ¿Qué características lo hacen posible?",
    "options": [
      {
        "id": "A",
        "text": "Instantáneas de memoria"
      },
      {
        "id": "B",
        "text": "Razonamiento de varios pasos"
      },
      {
        "id": "C",
        "text": "Gestión del contexto"
      },
      {
        "id": "D",
        "text": "Compilación estática"
      }
    ],
    "answer": "QixD",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 2,
    "type": "Única",
    "topic": "Licenciamiento Enterprise",
    "question": "Una startup fintech quiere integrar documentación Markdown de repositorios privados en la experiencia de Copilot. ¿Qué plan lo habilita?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Business"
      },
      {
        "id": "B",
        "text": "Copilot Pro"
      },
      {
        "id": "C",
        "text": "Copilot Free"
      },
      {
        "id": "D",
        "text": "Copilot Enterprise"
      }
    ],
    "answer": "RA==",
    "priority": "Normal"
  },
  {
    "id": 3,
    "type": "Multiple",
    "topic": "IDEs soportados",
    "question": "La organización usa varias herramientas. ¿Qué entornos de desarrollo admite la integración de GitHub Copilot según el banco de examen?",
    "options": [
      {
        "id": "A",
        "text": "Visual Studio Code"
      },
      {
        "id": "B",
        "text": "Xcode (vista previa)"
      },
      {
        "id": "C",
        "text": "JetBrains IDEs"
      },
      {
        "id": "D",
        "text": "Eclipse"
      }
    ],
    "answer": "QSxCLEM=",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 4,
    "type": "Única",
    "topic": "Copilot Ask vs Chat",
    "question": "El equipo compara Copilot Ask y Copilot Chat para documentación interna y revisión de código. ¿Cuál es la diferencia clave?",
    "options": [
      {
        "id": "A",
        "text": "Ask proporciona ediciones, Chat solo sugiere"
      },
      {
        "id": "B",
        "text": "Ask es sensible al contexto dentro del IDE, Chat es solo para navegador"
      },
      {
        "id": "C",
        "text": "Ask es conversacional y está en el editor, Chat admite extensiones y agentes"
      },
      {
        "id": "D",
        "text": "Ask es solo para empresas, Chat es para todos los usuarios"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 5,
    "type": "Verdadero/Falso",
    "topic": "Cloud Agent / PR",
    "question": "Un issue de GitHub es tomado por el agente sin indicaciones manuales, realiza cambios, valida y genera un PR. ¿Está dentro de las capacidades actuales de Copilot Agent Mode/cloud agent?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 6,
    "type": "Verdadero/Falso",
    "topic": "Refactorización autónoma",
    "question": "Agent Mode puede refactorizar de forma independiente interfaces de usuario y lógica en una base de código.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 7,
    "type": "Multiple",
    "topic": "Agent Mode / Persistencia",
    "question": "El agente actualiza microservicios coordinados, sigue pasos lógicos y conserva comprensión a lo largo del flujo. ¿Qué contribuye?",
    "options": [
      {
        "id": "A",
        "text": "Razonamiento de varios pasos"
      },
      {
        "id": "B",
        "text": "Persistencia del contexto"
      },
      {
        "id": "C",
        "text": "Clasificación de problemas de GitHub"
      },
      {
        "id": "D",
        "text": "Generación de comentarios en línea"
      }
    ],
    "answer": "QSxC",
    "priority": "Normal"
  },
  {
    "id": 8,
    "type": "Única",
    "topic": "Costos / Premium requests",
    "question": "Aumenta el uso de solicitudes premium durante alta actividad de PR. ¿Qué característica contribuye más?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Edits"
      },
      {
        "id": "B",
        "text": "Copilot Chat"
      },
      {
        "id": "C",
        "text": "Sugerencias básicas en línea"
      },
      {
        "id": "D",
        "text": "Filtrado de contexto"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 9,
    "type": "Verdadero/Falso",
    "topic": "GitHub Education",
    "question": "Copilot Pro es gratuito para profesores y estudiantes del programa educativo.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 10,
    "type": "Multiple",
    "topic": "Enterprise vs Business",
    "question": "¿Cuáles son diferenciadores clave de Copilot Enterprise sobre Business?",
    "options": [
      {
        "id": "A",
        "text": "Capacidad para ajustar un LLM"
      },
      {
        "id": "B",
        "text": "Acceso a registros de auditoría"
      },
      {
        "id": "C",
        "text": "Acceso a Knowledgebase"
      },
      {
        "id": "D",
        "text": "Aumento de los límites de velocidad del modelo"
      }
    ],
    "answer": "QSxDLEQ=",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 11,
    "type": "Verdadero/Falso",
    "topic": "Requisitos de conectividad",
    "question": "GitHub Copilot requiere una conexión activa a Internet para funcionar.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 12,
    "type": "Única",
    "topic": "MCP",
    "question": "El equipo de SecOps usa MCP para conectar asistentes de IA con fuentes seguras de inteligencia de amenazas. ¿Beneficio principal?",
    "options": [
      {
        "id": "A",
        "text": "Autorización de webhook"
      },
      {
        "id": "B",
        "text": "Comunicación estandarizada con herramientas"
      },
      {
        "id": "C",
        "text": "Cifrado de registro"
      },
      {
        "id": "D",
        "text": "Almacenamiento de tokens OAuth"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 13,
    "type": "Única",
    "topic": "Costos / Modelos",
    "question": "Tras cambiar a GPT-4.5 en el IDE aumenta el uso mensual. ¿Qué dispara solicitudes premium?",
    "options": [
      {
        "id": "A",
        "text": "Recuento de pestañas abiertas"
      },
      {
        "id": "B",
        "text": "Actualizaciones del IDE"
      },
      {
        "id": "C",
        "text": "Selección avanzada de modelos"
      },
      {
        "id": "D",
        "text": "Tamaño del espacio de trabajo"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 14,
    "type": "Multiple",
    "topic": "Gobernanza de planes",
    "question": "¿Qué planes admiten características extendidas de organización como facturación centralizada y control de políticas?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Pro"
      },
      {
        "id": "B",
        "text": "Copilot Business"
      },
      {
        "id": "C",
        "text": "Copilot Free"
      },
      {
        "id": "D",
        "text": "Copilot Enterprise"
      }
    ],
    "answer": "QixE",
    "priority": "Normal"
  },
  {
    "id": 15,
    "type": "Única",
    "topic": "LLM / NLP",
    "question": "¿Cómo procesa la entrada un modelo de lenguaje natural?",
    "options": [
      {
        "id": "A",
        "text": "Predice la siguiente palabra mediante ventanas de contexto"
      },
      {
        "id": "B",
        "text": "Asigna weights mediante vectores neuronales"
      },
      {
        "id": "C",
        "text": "Tokeniza la entrada en unidades discretas"
      },
      {
        "id": "D",
        "text": "Codifica partes de la oración para reglas gramaticales"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 16,
    "type": "Única",
    "topic": "DevOps / Boilerplate",
    "question": "DevOps pregunta si Copilot puede crear Dockerfiles y YAML repetitivos. ¿Función más relevante?",
    "options": [
      {
        "id": "A",
        "text": "Edits"
      },
      {
        "id": "B",
        "text": "Generación de Boilerplate"
      },
      {
        "id": "C",
        "text": "Variables de Chat"
      },
      {
        "id": "D",
        "text": "Modo Refactor"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 17,
    "type": "Única",
    "topic": "Contexto IDE",
    "question": "En VS Code, Copilot sugiere una corrección precisa usando archivos abiertos. ¿Cómo generó sugerencia consciente de contexto?",
    "options": [
      {
        "id": "A",
        "text": "Basado en el orden de tabulación"
      },
      {
        "id": "B",
        "text": "Desde el código almacenado en GitHub"
      },
      {
        "id": "C",
        "text": "Mediante el uso de pestañas abiertas como contexto de prompt"
      },
      {
        "id": "D",
        "text": "Consultó un modelo externo"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 18,
    "type": "Multiple",
    "topic": "Agent Mode / Herramientas",
    "question": "Equipo de logística quiere que Agent Mode modernice temas heredados y use herramientas dinámicas. ¿Qué características ayudan?",
    "options": [
      {
        "id": "A",
        "text": "Uso de herramientas y ejecución de comandos"
      },
      {
        "id": "B",
        "text": "Validación de reglas estáticas"
      },
      {
        "id": "C",
        "text": "Descomposición de tareas"
      },
      {
        "id": "D",
        "text": "Iteración autónoma"
      }
    ],
    "answer": "QSxDLEQ=",
    "priority": "Normal"
  },
  {
    "id": 19,
    "type": "Multiple",
    "topic": "Colaboración",
    "question": "¿Qué características admiten desarrollo colaborativo en GitHub Copilot?",
    "options": [
      {
        "id": "A",
        "text": "Revisión de código con comentarios"
      },
      {
        "id": "B",
        "text": "Programación de pares en línea"
      },
      {
        "id": "C",
        "text": "Variables de Chat"
      },
      {
        "id": "D",
        "text": "Memoria de chat en todo el espacio de trabajo"
      }
    ],
    "answer": "QSxD",
    "priority": "Normal"
  },
  {
    "id": 20,
    "type": "Única",
    "topic": "Auditoría / Compliance",
    "question": "Organización gubernamental requiere visibilidad granular de uso y eventos. ¿Qué característica responde?",
    "options": [
      {
        "id": "A",
        "text": "Resúmenes de PR"
      },
      {
        "id": "B",
        "text": "Seguimiento de actividad mediante CI"
      },
      {
        "id": "C",
        "text": "Registros de auditoría"
      },
      {
        "id": "D",
        "text": "Habilidades de chat en IDE"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 21,
    "type": "Única",
    "topic": "Automatización de licencias",
    "question": "La empresa prefiere administrar licencias por scripts. ¿Qué opción permite automatización?",
    "options": [
      {
        "id": "A",
        "text": "GitHub REST API"
      },
      {
        "id": "B",
        "text": "GitHub CLI con permisos limitados"
      },
      {
        "id": "C",
        "text": "Extensiones de VS Code"
      },
      {
        "id": "D",
        "text": "Azure DevOps Service Hook"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 22,
    "type": "Relacionar",
    "topic": "Escenarios mixtos",
    "question": "Relacionar seis situaciones de Copilot con capacidad/limitación correcta.",
    "options": [
      {
        "id": "A",
        "text": "Ver hoja Clave_Justificada"
      },
      {
        "id": "B",
        "text": "Ver respuesta textual"
      },
      {
        "id": "C",
        "text": "Ver explicación"
      }
    ],
    "answer": "",
    "priority": "Normal"
  },
  {
    "id": 23,
    "type": "Multiple",
    "topic": "Agent Mode vs Chat",
    "question": "¿Qué funcionalidades son exclusivas de Agent Mode frente a interacciones tradicionales prompt-respuesta?",
    "options": [
      {
        "id": "A",
        "text": "Planificación de tareas de varios pasos"
      },
      {
        "id": "B",
        "text": "Resolución de prompt conversacional"
      },
      {
        "id": "C",
        "text": "Selección y ejecución de herramientas"
      },
      {
        "id": "D",
        "text": "Acceso a ventana de chat del IDE"
      }
    ],
    "answer": "QSxD",
    "priority": "Normal"
  },
  {
    "id": 24,
    "type": "Verdadero/Falso",
    "topic": "REST API / Asientos",
    "question": "¿Se puede administrar Copilot Business y Enterprise a través de las API REST de GitHub?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "Qg==",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 25,
    "type": "Única",
    "topic": "Planes individuales",
    "question": "Un desarrollador usa chat y completions en JetBrains/VS Code. ¿Qué plan individual ofrece compatibilidad completa de IDE?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Free"
      },
      {
        "id": "B",
        "text": "Copilot Pro"
      },
      {
        "id": "C",
        "text": "Copilot Business"
      },
      {
        "id": "D",
        "text": "Copilot Enterprise"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 26,
    "type": "Única",
    "topic": "Acceso gratuito",
    "question": "¿Qué grupo califica para acceso gratuito a GitHub Copilot Pro?",
    "options": [
      {
        "id": "A",
        "text": "Fundadores de startups"
      },
      {
        "id": "B",
        "text": "GitHub Campus Experts"
      },
      {
        "id": "C",
        "text": "GitHub Stars"
      },
      {
        "id": "D",
        "text": "Mantenedores de código abierto verificados"
      }
    ],
    "answer": "RA==",
    "priority": "Normal"
  },
  {
    "id": 27,
    "type": "Única",
    "topic": "CI/CD / Boilerplate",
    "question": "DevOps quiere escribir workflows CI/CD repetitivos rápidamente. ¿Qué capacidad aplica?",
    "options": [
      {
        "id": "A",
        "text": "GitHub Actions Plugin"
      },
      {
        "id": "B",
        "text": "Snippet importer"
      },
      {
        "id": "C",
        "text": "Boilerplate Generation"
      },
      {
        "id": "D",
        "text": "Copilot Chat con GPT-4.5"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 28,
    "type": "Multiple",
    "topic": "Testing",
    "question": "¿Qué soporte de pruebas puede proporcionar Copilot para JavaScript y Python?",
    "options": [
      {
        "id": "A",
        "text": "Generación de casos de prueba unitarios"
      },
      {
        "id": "B",
        "text": "Refactorización de pruebas legacy"
      },
      {
        "id": "C",
        "text": "Escribir datos de prueba"
      },
      {
        "id": "D",
        "text": "Ejecución automática de pruebas"
      }
    ],
    "answer": "QSxD",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 29,
    "type": "Única",
    "topic": "Agent Mode",
    "question": "Modernizar plataforma heredada con cambios repetitivos y gran escala en módulos. ¿Qué característica/producto aplica?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Ask"
      },
      {
        "id": "B",
        "text": "Copilot Edits"
      },
      {
        "id": "C",
        "text": "Copilot Agent Mode"
      },
      {
        "id": "D",
        "text": "GitHub Actions"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 30,
    "type": "Verdadero/Falso",
    "topic": "Facturación",
    "question": "Organización sin configuración de facturación puede acceder completamente a Copilot sin interrupción.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 31,
    "type": "Única",
    "topic": "IP / Código público",
    "question": "¿Qué combinación reduce riesgos legales por reutilización de código público?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Pro con revisión manual de PR"
      },
      {
        "id": "B",
        "text": "Copilot Business con filtrado de código público habilitado"
      },
      {
        "id": "C",
        "text": "Copilot Pro con privilegios de PR ampliados"
      },
      {
        "id": "D",
        "text": "Copilot Free con marcas de política"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 32,
    "type": "Única",
    "topic": "Autocuración",
    "question": "Agent Mode reejecuta herramientas fallidas tras revisar logs sin intervención. ¿Qué característica ilustra?",
    "options": [
      {
        "id": "A",
        "text": "Encadenamiento de prompt"
      },
      {
        "id": "B",
        "text": "Sandboxing de herramientas"
      },
      {
        "id": "C",
        "text": "Autocuración"
      },
      {
        "id": "D",
        "text": "Revisión manual"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 33,
    "type": "Única",
    "topic": "GHES / GitHub Connect",
    "question": "¿Copilot está disponible en GitHub Enterprise Server sin GitHub Connect?",
    "options": [
      {
        "id": "A",
        "text": "Sí, con implementación especial"
      },
      {
        "id": "B",
        "text": "Sí, solo para empresas"
      },
      {
        "id": "C",
        "text": "No, a menos que GitHub Connect esté habilitado"
      },
      {
        "id": "D",
        "text": "Sí, a través de Marketplace"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 34,
    "type": "Multiple",
    "topic": "Enterprise-only",
    "question": "¿Qué características solo están disponibles en Copilot Enterprise según el banco?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Knowledgebase Search"
      },
      {
        "id": "B",
        "text": "IP Indemnification"
      },
      {
        "id": "C",
        "text": "Copilot Chat Skills en IDE"
      },
      {
        "id": "D",
        "text": "Ajuste de un LLM personalizado"
      }
    ],
    "answer": "QSxE",
    "priority": "Normal"
  },
  {
    "id": 35,
    "type": "Verdadero/Falso",
    "topic": "Frontend",
    "question": "Copilot puede generar HTML, CSS, JavaScript y diseños con Tailwind.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 36,
    "type": "Única",
    "topic": "Copilot Free",
    "question": "Estudiante usa Copilot con soporte limitado comparado con experiencias profesionales de IDE. ¿Plan probable?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Enterprise"
      },
      {
        "id": "B",
        "text": "Copilot Pro"
      },
      {
        "id": "C",
        "text": "Copilot Free"
      },
      {
        "id": "D",
        "text": "Copilot Business"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 37,
    "type": "Multiple",
    "topic": "IP / Code referencing",
    "question": "¿Qué salvaguardas existen para propiedad intelectual?",
    "options": [
      {
        "id": "A",
        "text": "Filtra sugerencias de más de 150 caracteres"
      },
      {
        "id": "B",
        "text": "Compara sugerencias con código público"
      },
      {
        "id": "C",
        "text": "Encripta las sugerencias de código"
      },
      {
        "id": "D",
        "text": "Agrega licencias automáticamente"
      }
    ],
    "answer": "QSxC",
    "priority": "Normal"
  },
  {
    "id": 38,
    "type": "Multiple",
    "topic": "MCP",
    "question": "¿Qué características clave de MCP ayudan a integrar APIs de terceros y herramientas internas de forma confiable y segura?",
    "options": [
      {
        "id": "A",
        "text": "Integración segura con herramientas empresariales"
      },
      {
        "id": "B",
        "text": "Actualizaciones manuales del modelo de solo triggers"
      },
      {
        "id": "C",
        "text": "Soporte de comunicación multimodal"
      },
      {
        "id": "D",
        "text": "Comunicación estandarizada entre modelos y herramientas"
      }
    ],
    "answer": "QSxDLEQ=",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 39,
    "type": "Verdadero/Falso",
    "topic": "Cloud Agent / PR",
    "question": "Copilot Agent en contenedor cloud crea rama y abre PR después de cambios. ¿Puede hacerlo automáticamente?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 40,
    "type": "Verdadero/Falso",
    "topic": "Alojamiento privado",
    "question": "Copilot puede ejecutarse completamente local o en nube privada sin servicios cloud de GitHub.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 41,
    "type": "Multiple",
    "topic": "MCP / VS Code",
    "question": "¿Qué componentes son esenciales para habilitar MCP en VS Code?",
    "options": [
      {
        "id": "A",
        "text": ".vscode/mcp.json"
      },
      {
        "id": "B",
        "text": "settings.json"
      },
      {
        "id": "C",
        "text": "mcp_agent.lock"
      },
      {
        "id": "D",
        "text": "chat.mcp.discovery.enabled"
      }
    ],
    "answer": "QSxCLEQ=",
    "priority": "Normal"
  },
  {
    "id": 42,
    "type": "Multiple",
    "topic": "ETL / JSON / API",
    "question": "Ingeniero de datos limpia JSON e interactúa con APIs REST. ¿Qué casos se alinean mejor?",
    "options": [
      {
        "id": "A",
        "text": "Análisis de JSON anidado"
      },
      {
        "id": "B",
        "text": "Escribir automatización de bash para API"
      },
      {
        "id": "C",
        "text": "Administración de versiones del modelo de ML"
      },
      {
        "id": "D",
        "text": "Cambiar el nombre de conjuntos de archivos"
      }
    ],
    "answer": "QSxCLEQ=",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 43,
    "type": "Única",
    "topic": "Agent Mode / Planificación",
    "question": "Necesitan descomponer tareas complejas de lógica empresarial en subtareas ordenadas y resolverlas iterativamente. ¿Funcionalidad?",
    "options": [
      {
        "id": "A",
        "text": "Refinamiento de prompt"
      },
      {
        "id": "B",
        "text": "Planificación y descomposición de tareas"
      },
      {
        "id": "C",
        "text": "Depuración en tiempo real"
      },
      {
        "id": "D",
        "text": "Resumen de comandos"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 44,
    "type": "Única",
    "topic": "Documentación autónoma",
    "question": "Startup quiere documentar automáticamente métodos y clases públicos. ¿Qué tarea encaja con Agent Mode?",
    "options": [
      {
        "id": "A",
        "text": "Escribir archivos README desde cero"
      },
      {
        "id": "B",
        "text": "Documentar todos los métodos y funciones en una base de código"
      },
      {
        "id": "C",
        "text": "Chatear con Copilot sobre la lógica del código"
      },
      {
        "id": "D",
        "text": "Crear plantillas markdown"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 45,
    "type": "Multiple",
    "topic": "Buenas prácticas",
    "question": "¿Mejores prácticas recomendadas al usar Copilot según el banco?",
    "options": [
      {
        "id": "A",
        "text": "Escriba prompts claros y concisos"
      },
      {
        "id": "B",
        "text": "Revise y edite todas las sugerencias de código"
      },
      {
        "id": "C",
        "text": "Utilice siempre GPT-4.5 para obtener máxima precisión"
      },
      {
        "id": "D",
        "text": "Limite el uso del chat a menos que sea necesario"
      }
    ],
    "answer": "QSxC",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 46,
    "type": "Verdadero/Falso",
    "topic": "Model selection",
    "question": "¿Es buena práctica usar GPT-4.5 para cada prompt sin importar complejidad?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 47,
    "type": "Única",
    "topic": "MCP / Transportes",
    "question": "Chatbot quiere consumir resultados a través de múltiples formatos de transmisión. ¿Capacidad MCP?",
    "options": [
      {
        "id": "A",
        "text": "Autenticación basada en tokens"
      },
      {
        "id": "B",
        "text": "Prompts contextuales"
      },
      {
        "id": "C",
        "text": "Comunicación multimodal"
      },
      {
        "id": "D",
        "text": "Asignación de SDK a API"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 48,
    "type": "Verdadero/Falso",
    "topic": "Autocuración",
    "question": "Agent Mode reintenta automáticamente una operación usando lógica de reserva derivada de patrones existentes. ¿Autocuración?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 49,
    "type": "Única",
    "topic": "Copilot Edits",
    "question": "Refactorización a gran escala: quiere visibilidad completa antes de aplicar cambios. ¿Qué característica?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Ask"
      },
      {
        "id": "B",
        "text": "GitHub Actions"
      },
      {
        "id": "C",
        "text": "Copilot Edits"
      },
      {
        "id": "D",
        "text": "Visual Studio Debugger"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 50,
    "type": "Verdadero/Falso",
    "topic": "Control humano / Undo",
    "question": "¿Agent Mode permite interrumpir o deshacer acciones autónomas?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 51,
    "type": "Multiple",
    "topic": "Acceso controlado",
    "question": "¿Qué configuraciones permiten acceso controlado a Copilot en una organización según el banco?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar a través de Org Settings > Access"
      },
      {
        "id": "B",
        "text": "Solo opt-in de usuario individual"
      },
      {
        "id": "C",
        "text": "Policy exclusions for certain files"
      },
      {
        "id": "D",
        "text": "Asignar puestos mediante REST API"
      }
    ],
    "answer": "QSxDLEQ=",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 52,
    "type": "Verdadero/Falso",
    "topic": "Explicación de código",
    "question": "¿Puede Copilot explicar código heredado cuando se pregunta en lenguaje natural?",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 53,
    "type": "Verdadero/Falso",
    "topic": "MCP discovery",
    "question": "Configurar .vscode/mcp.json y chat.mcp.discovery.enabled en VS Code permite descubrimiento automático de herramientas MCP.",
    "options": [
      {
        "id": "A",
        "text": "Verdadero"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "answer": "QQ==",
    "priority": "Normal"
  },
  {
    "id": 54,
    "type": "Única",
    "topic": "Multi-step reasoning",
    "question": "Arquitectura de microservicios requiere razonar entre múltiples cambios y dependencias. ¿Qué tipo de razonamiento?",
    "options": [
      {
        "id": "A",
        "text": "Replicación de tareas"
      },
      {
        "id": "B",
        "text": "Encadenamiento de lógica estática"
      },
      {
        "id": "C",
        "text": "Razonamiento de varios pasos"
      },
      {
        "id": "D",
        "text": "Encadenamiento basado en prompts"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 55,
    "type": "Única",
    "topic": "Copilot Ask",
    "question": "Asistencia en lenguaje natural con código, pero sin ejecución ni planificación de tareas. ¿Producto?",
    "options": [
      {
        "id": "A",
        "text": "Copilot Agent Mode"
      },
      {
        "id": "B",
        "text": "Copilot Edits"
      },
      {
        "id": "C",
        "text": "Copilot Ask"
      },
      {
        "id": "D",
        "text": "Copilot Studio"
      }
    ],
    "answer": "Qw==",
    "priority": "Normal"
  },
  {
    "id": 56,
    "type": "Multiple",
    "topic": "Agent Mode / Autonomía",
    "question": "Agent Mode para limpieza de deuda técnica sin supervisión excesiva y mejoras si falla la primera ejecución. ¿Características?",
    "options": [
      {
        "id": "A",
        "text": "Autonomía de ejecución de herramientas"
      },
      {
        "id": "B",
        "text": "Razonamiento de varios pasos"
      },
      {
        "id": "C",
        "text": "Autocuración"
      },
      {
        "id": "D",
        "text": "Aprobación manual de pasos"
      }
    ],
    "answer": "QSxCLEM=",
    "priority": "Normal"
  },
  {
    "id": 57,
    "type": "Única",
    "topic": "MCP / WebSocket",
    "question": "Agente usa API WebSocket para integrarse con backend y mejorar latencia/respuesta. ¿Qué característica MCP se demuestra?",
    "options": [
      {
        "id": "A",
        "text": "Comunicación estandarizada"
      },
      {
        "id": "B",
        "text": "Integración segura"
      },
      {
        "id": "C",
        "text": "Integración multimodal"
      },
      {
        "id": "D",
        "text": "Traducción de comandos en tiempo real"
      }
    ],
    "answer": "Qw==",
    "priority": "REVISAR SÍ O SÍ"
  },
  {
    "id": 58,
    "type": "Multiple",
    "topic": "Límites Enterprise",
    "question": "¿Qué afirmaciones son ciertas sobre límites de tarifa/rendimiento de Copilot Enterprise vs otros planes?",
    "options": [
      {
        "id": "A",
        "text": "Límite de solicitudes diarias más alto que Business"
      },
      {
        "id": "B",
        "text": "Menor simultaneidad que Individual"
      },
      {
        "id": "C",
        "text": "Se permite un aumento de las solicitudes simultáneas"
      },
      {
        "id": "D",
        "text": "Mismos límites de velocidad que Free"
      }
    ],
    "answer": "QSxD",
    "priority": "Normal"
  },
  {
    "id": 59,
    "type": "Única",
    "topic": "MCP / Seguridad",
    "question": "Agente IA seguro interactúa con herramientas empresariales vía MCP. ¿Característica más relevante?",
    "options": [
      {
        "id": "A",
        "text": "Linting del repositorio"
      },
      {
        "id": "B",
        "text": "Integración segura y escalable"
      },
      {
        "id": "C",
        "text": "Procesamiento por lotes de comandos estáticos"
      },
      {
        "id": "D",
        "text": "Resumen de prompts"
      }
    ],
    "answer": "Qg==",
    "priority": "Normal"
  },
  {
    "id": 60,
    "type": "Multiple",
    "topic": "Casos adecuados Agent Mode",
    "question": "¿Qué tareas son adecuadas para Agent Mode autónomo?",
    "options": [
      {
        "id": "A",
        "text": "Refactorización en nuevos patrones de diseño"
      },
      {
        "id": "B",
        "text": "Corrección gramatical en el contenido del blog"
      },
      {
        "id": "C",
        "text": "Localización y fijación de elementos TODO"
      },
      {
        "id": "D",
        "text": "Ejecución de integraciones de API de varios pasos"
      }
    ],
    "answer": "QSxDLEQ=",
    "priority": "Normal"
  }
];
  const labels = {
    ready: "Listo para rendir",
    almost: "Buen nivel, reforzar errores puntuales",
    practice: "Requiere repaso guiado antes de rendir",
  };
  const state = { answers: new Map() };
  const $ = (selector) => document.querySelector(selector);
  const sortLetters = (items) => [...items].sort().join(",");
  const decodeAnswer = (q) => atob(q.answer);

  const renderQuestions = () => {
    const root = $("#examQuestions");
    if (!root) return;
    root.innerHTML = questions
      .map((q) => {
        const isMultiple = q.type.toLowerCase().includes("multiple");
        const mode = isMultiple ? "checkbox" : "radio";
        const helper = isMultiple
          ? "Seleccioná todas las opciones que correspondan."
          : "Seleccioná una opción.";
        return `
          <article class="exam-question" data-question="${q.id}">
            <div class="exam-meta">
              <span>Pregunta ${q.id}</span>
              <span>${q.type}</span>
              ${q.priority.includes("REVISAR") ? "<strong>Crítica</strong>" : ""}
            </div>
            <h3>${q.question}</h3>
            <p>${q.topic} · ${helper}</p>
            <div class="exam-options">
              ${q.options
                .map(
                  (opt) => `
                    <label>
                      <input type="${mode}" name="q-${q.id}" value="${opt.id}" />
                      <span><b>${opt.id}</b> ${opt.text}</span>
                    </label>
                  `
                )
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");

    root.addEventListener("change", (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement)) return;
      const card = input.closest(".exam-question");
      if (!card) return;
      const qid = Number(card.dataset.question);
      const selected = [...card.querySelectorAll("input:checked")].map((item) => item.value);
      state.answers.set(qid, selected);
      updateProgress();
    });
    updateProgress();
  };

  const updateProgress = () => {
    const answered = questions.filter((q) => (state.answers.get(q.id) || []).length > 0).length;
    const progress = Math.round((answered / questions.length) * 100);
    const bar = $("#examProgressBar");
    if (bar) bar.style.width = `${progress}%`;
    const label = $("#examProgressText");
    if (label) label.textContent = `${answered}/${questions.length} respondidas`;
  };

  const evaluate = () => {
    let correct = 0;
    const byTopic = new Map();
    const misses = [];

    questions.forEach((q) => {
      const picked = sortLetters(state.answers.get(q.id) || []);
      const expected = decodeAnswer(q);
      const ok = picked === expected;
      if (ok) correct += 1;

      const topic = byTopic.get(q.topic) || { total: 0, ok: 0, critical: 0 };
      topic.total += 1;
      topic.ok += ok ? 1 : 0;
      topic.critical += q.priority.includes("REVISAR") && !ok ? 1 : 0;
      byTopic.set(q.topic, topic);
      if (!ok) misses.push(q);
    });

    const percent = Math.round((correct / questions.length) * 100);
    const status = percent >= 90 ? labels.ready : percent >= 80 ? labels.almost : labels.practice;
    const weakTopics = [...byTopic.entries()]
      .map(([topic, value]) => ({
        topic,
        ...value,
        pct: Math.round((value.ok / value.total) * 100),
      }))
      .filter((item) => item.pct < 85 || item.critical > 0)
      .sort((a, b) => a.pct - b.pct || b.critical - a.critical)
      .slice(0, 8);

    const results = $("#examResults");
    results.hidden = false;
    results.innerHTML = `
      <div class="result-summary">
        <div><span>${percent}%</span><strong>${correct}/${questions.length} correctas</strong></div>
        <div><span>${misses.length}</span><strong>preguntas a revisar</strong></div>
        <div><span>${weakTopics.length}</span><strong>temas prioritarios</strong></div>
      </div>
      <h3>${status}</h3>
      <p>No se muestran respuestas correctas. Usá este resultado como diagnóstico de estudio y repetí el simulador hasta superar 90% de manera consistente.</p>
      <div class="topic-review">
        <h4>Temas a reforzar</h4>
        ${
          weakTopics.length
            ? weakTopics
                .map(
                  (item) => `
                    <article>
                      <strong>${item.topic}</strong>
                      <span>${item.ok}/${item.total} correctas · ${item.pct}%${item.critical ? " · incluye pregunta crítica" : ""}</span>
                    </article>
                  `
                )
                .join("")
            : "<p>Excelente: no hay temas por debajo del umbral de refuerzo.</p>"
        }
      </div>
      <div class="topic-review">
        <h4>Preguntas para volver a practicar</h4>
        ${
          misses.length
            ? misses
                .slice(0, 20)
                .map(
                  (q) => `
                    <article>
                      <strong>Pregunta ${q.id}</strong>
                      <span>${q.topic}${q.priority.includes("REVISAR") ? " · crítica" : ""}</span>
                    </article>
                  `
                )
                .join("")
            : "<p>Simulador completo sin errores. Muy buen nivel.</p>"
        }
      </div>
    `;
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const reset = () => {
    state.answers.clear();
    document.querySelectorAll("#examQuestions input").forEach((input) => {
      input.checked = false;
    });
    const results = $("#examResults");
    if (results) {
      results.hidden = true;
      results.innerHTML = "";
    }
    updateProgress();
    $("#simulador-examen")?.scrollIntoView({ behavior: "smooth" });
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderQuestions();
    $("#gradeExam")?.addEventListener("click", evaluate);
    $("#resetExam")?.addEventListener("click", reset);
  });
})();
