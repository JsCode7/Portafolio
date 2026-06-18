export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'Fokus Home - Shopify',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'Vandine - Shopify',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'FCS - Wordpress',
  },
];

export const startingFeatures = [
  {
    imgUrl: '/pilar-architecture.png',
    description: 'Arquitectura Hexagonal & Clean | Separando dominio, aplicación e infraestructura para sistemas robustos y escalables.',
  },
  {
    imgUrl: '/pilar-backend.png',
    description: 'TypeScript & NestJS | El núcleo tipado y estructurado ideal para la creación de APIs y microservicios estables.',
  },
  {
    imgUrl: '/pilar-cloud.png',
    description: 'Cloud Serverless & DevOps | Despliegues y sincronizaciones en AWS (Lambda, RDS, S3), Docker y automatización con CI/CD.',
  },
  {
    imgUrl: '/pilar-craftsmanship.png',
    description: 'Product-Led Engineering | Comprometido con la cultura de Craftsmanship, asegurando que cada línea aporte valor real al usuario.',
  },
];

export const techCategories = [
  {
    title: 'Backend Core',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    items: [
      { name: 'Node.js', level: 'Dominio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'NestJS', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'TypeScript', level: 'Dominio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Prisma ORM', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    items: [
      { name: 'AWS Lambda, RDS, S3', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Docker / Kubernetes', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'CI/CD Pipelines', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    ],
  },
  {
    title: 'Databases',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    items: [
      { name: 'PostgreSQL', level: 'Dominio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', level: 'Dominio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    title: 'Platforms & Sync',
    icon: '/shopify.svg',
    items: [
      { name: 'Shopify APIs & Liquid', level: 'Avanzado', icon: '/shopify.svg' },
      { name: 'Webflow + API JS', level: 'Avanzado', icon: '/webflow.svg' },
    ],
  },
];

export const insights = [
  {
    slug: '1',
    imgUrl: '/planet-06.png',
    imgPost: '/post-01.png',
    title: 'El universo y la programación',
    subtitle:
        'El universo es vasto y se extiende a lo largo del espacio y el tiempo, mientras que la programación puede ser infinita en teoría...',
    p1: 'Al adentrarnos en el universo de la programación, descubrimos un cosmos en miniatura. Los programadores son como arquitectos cósmicos, construyendo mundos virtuales a partir de líneas de código. Cada programa es un universo en sí mismo, con sus propias leyes, reglas y habitantes digitales. Al igual que el universo físico, el universo de la programación está regido por principios fundamentales. La lógica, la estructura y los patrones son los ladrillos que conforman ambos universos.',
    p2: 'La expansión infinita: Tanto el universo como la programación se caracterizan por su capacidad de expansión. El universo se expande constantemente, dando lugar a nuevas galaxias, estrellas y planetas. De manera similar, el mundo de la programación está en constante evolución, con el surgimiento de nuevos lenguajes, frameworks y tecnologías que amplían las fronteras de lo posible. ',
    p3: 'La complejidad emergente: En ambos universos, la complejidad surge de la interacción de elementos simples. Las galaxias se forman a partir de la atracción gravitatoria de millones de estrellas, mientras que los programas más sofisticados son el resultado de la combinación de miles de líneas de código.',
    p4: 'La búsqueda de patrones: Tanto los astrónomos como los programadores dedican gran parte de su tiempo a buscar patrones y regularidades. Los astrónomos estudian las galaxias, las estrellas y los planetas para comprender las leyes que rigen el universo, mientras que los programadores analizan grandes cantidades de datos para identificar patrones que les permitan mejorar sus algoritmos.',
    p5: 'La relación entre el universo y la programación es cada vez más estrecha. A medida que avanzamos en nuestra comprensión del cosmos, también avanzamos en nuestra capacidad para crear mundos virtuales cada vez más complejos y realistas. En un futuro no muy lejano, podríamos ser capaces de simular universos completos en nuestros ordenadores, explorando los misterios del cosmos desde la comodidad de nuestros hogares.',
  },
  {
    slug: '2',
    imgUrl: '/planet-04.png',
    imgPost: '/planet-05.png',
    title: 'Harness: El pilar del desarrollo guiado por IA (AIDD)',
    subtitle:
        'Por qué el arnés de pruebas y validación es indispensable al integrar Inteligencia Artificial en el ciclo de vida del software (SDD).',
    p1: 'Con el auge de la inteligencia artificial generativa, el desarrollo de software ha entrado en una nueva era: el Desarrollo Dirigido por IA (AIDD - AI-Driven Development). Hoy en día, las herramientas de IA pueden generar miles de líneas de código en segundos. Sin embargo, esta velocidad introduce un desafío crítico: la confianza. ¿Cómo aseguramos que el código generado de manera autónoma o semi-autónoma es correcto, seguro y eficiente? Aquí es donde entra en juego el "Harness" o arnés de pruebas.',
    p2: 'El harness actúa como una infraestructura rigurosa de validación y simulación. En el ciclo clásico de diseño y desarrollo de software (SDD) y en especial en el flujo AIDD, el arnés proporciona el entorno controlado donde el código de la IA se ejecuta, se estresa y se evalúa automáticamente. Sin un arnés robusto, delegar tareas a agentes autónomos de codificación sería como construir un rascacielos sobre arena movediza: no tendríamos forma de verificar de manera consistente que cada iteración mantiene la integridad del sistema.',
    p3: 'En el ciclo de AIDD, el arnés no es solo un conjunto de pruebas unitarias que se ejecutan al final; es una parte integral del ciclo continuo de retroalimentación. La IA propone cambios, el arnés evalúa y detecta regresiones o fallas de forma inmediata, y la IA utiliza esos resultados (logs de errores, fallas de compilación, cuellos de botella de rendimiento) para corregirse a sigo misma. Este bucle de retroalimentación ultrarrápido transforma el arnés en el verdadero cerebro operativo de la automatización del software.',
    p4: 'Además de validar la funcionalidad básica, un harness moderno para AIDD debe evaluar aspectos no funcionales como el consumo de memoria, la latencia de las peticiones, la seguridad del código frente a vulnerabilidades comunes y la conformidad con los estándares arquitectónicos (como Clean Architecture). Al establecer límites rígidos pero flexibles a través del arnés, los desarrolladores pueden capacitar a las herramientas de IA para innovar con seguridad dentro de un marco de ingeniería seguro y controlado.',
    p5: 'En conclusión, la verdadera revolución de la IA en el desarrollo de software no radica en la generación de código sin control, sino en la capacidad de automatizar la validación y el refinamiento continuo. El harness es el eslabón indispensable que permite dar el salto de prototipos rápidos generados por IA a sistemas listos para producción empresarial. En la ingeniería moderna, diseñar un arnés sólido es la mayor garantía de éxito.',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
    urlreal: 'https://twitter.com/Jsdeveloper_',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    urlreal: 'https://www.linkedin.com/in/jdsmdeveloper/',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    urlreal: 'https://www.instagram.com/jscode_7',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    urlreal: 'https://www.facebook.com/JDSMDev',
  },
];
