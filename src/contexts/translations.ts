export type TranslationValue =
  | string
  | string[]
  | { [key: string]: TranslationValue };

type TranslationsType = {
  [key in "en" | "es"]: {
    [key: string]: TranslationValue;
  };
};

export const translations: TranslationsType = {
  en: {
    // Navbar
    nav: {
      classes: "Services",
      about: "About Me",
      contact: "Contact Me",
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      role: "Teacher of",
      english: "English",
      and: "and",
      spanish: "Spanish",
      description:
        "Personalized online classes that adapt to your pace and goals. Practical, conversational, and effective methodology.",
      cta: "Start Now",
      experience: "years of experience",
      students: "students",
    },

    // Classes
    classes: {
      my: "My",
      services: "Services",
      main: "English and Spanish Classes",
      live: {
        title: "Live Sessions",
        desc: "1-hour session via video call (Skype, Zoom, Classgap)",
      },
      levels: {
        title: "All Levels",
        desc: "We adapt the content to your needs",
      },
      conversation: {
        title: "Conversation Practice",
        desc: "Develop fluency and confidence with practical exercises",
      },
      schedule: {
        title: "Flexible Schedule",
        desc: "Schedule your classes at your convenience",
      },
      exam: {
        title: "Exam Preparation",
        desc: "Proven strategies and exclusive materials to pass your exam",
      },
      start: "Start Now",
    },

    // About
    about: {
      title: "About",
      me: "Me",
      description: {
        1: "Hello! I'm Laia, a 23-year-old Spanish teacher with 4 years of experience teaching English and 2 years teaching Spanish. My passion for languages led me to train in academies and with private tutors, culminating in a stay in England to perfect my English. I'm thrilled to see my students' progress and how they gain confidence in communicating in a new language.",
        2: "As a teacher, I combine my training with my own language learning experience. This allows me to identify the specific challenges of each language and adapt my classes to overcome them effectively. My friendly and conversational approach helps create a comfortable environment where learning flows naturally.",
      },
      international: {
        title: "International Experience",
        desc: "Teaching training and experience in England.",
      },
      dynamic: {
        title: "Dynamic Classes",
        desc: "Interactive sessions that maintain your interest and motivation.",
      },
      results: {
        title: "Guaranteed Results",
        desc: "5-star rating based on 7 verified reviews. Verified profile with proven data.",
      },
    },

    // Testimonials
    testimonials: {
      what: "What My",
      students: "Students",
      saying: "Are Saying",
    },

    // CTA
    cta: {
      title: "Let's Start Your",
      highlight: "Learning",
      description:
        "I want to help you achieve your goals in English and Spanish through dynamic, friendly, and interactive learning experiences.",
      button: "Contact Me",
    },

    // Footer
    footer: {
      links: "Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
      rights: "All rights reserved.",
    },

    // Special sections with nested structure
    "404": {
      title: "Page Not Found",
      description:
        "The page you're looking for doesn't exist or has been moved.",
      home: "Back to Home",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated:",
      sections: {
        info: {
          title: "1. Information We Collect",
          desc: "We collect the following information when you use our services:",
          items: [
            "Contact information (email, phone)",
            "Academic profile and language level information",
            "Session records and learning progress",
            "Technical information about your device and connection",
          ],
        },
        use: {
          title: "2. Use of Information",
          desc: "We use your personal information for:",
          items: [
            "Providing and personalizing our educational services",
            "Communicating with you about your classes and progress",
            "Improving our teaching methods and materials",
            "Complying with legal obligations and protecting our rights",
          ],
        },
        protection: {
          title: "3. Data Protection",
          desc: "We implement technical and organizational security measures to protect your personal information:",
          items: [
            "Encryption of sensitive data",
            "Restricted access to personal information",
            "Regular monitoring of security systems",
            "Staff training in data protection",
          ],
        },
        rights: {
          title: "4. Your Rights",
          desc: "You have the following rights regarding your personal data:",
          items: [
            "Access your personal data",
            "Rectify incorrect data",
            "Request deletion of your data",
            "Object to data processing",
            "Data portability",
          ],
        },
        cookies: {
          title: "5. Cookies and Similar Technologies",
          desc: "We use cookies and similar technologies to:",
          items: [
            "Maintain your active session",
            "Remember your preferences",
            "Analyze website usage",
            "Improve user experience",
          ],
        },
        contact: {
          title: "6. Contact",
          desc: "For any inquiries about this privacy policy or the processing of your personal data, you can contact us at:",
          email: "laiamartinezosorio0@gmail.com",
          phone: "+34 684 132 605",
        },
      },
    },
    terms: {
      title: "Terms and Conditions",
      lastUpdated: "Last updated:",
      sections: {
        acceptance: {
          title: "1. Acceptance of Terms",
          desc: "By accessing and using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not access the service.",
        },
        service: {
          title: "2. Service Description",
          desc: "We offer language teaching services that include:",
          items: [
            "Individual online classes",
            "Digital teaching materials",
            "Progress evaluations",
            "Complementary learning resources",
          ],
        },
        conditions: {
          title: "3. Terms of Use",
          desc: "When using our services, you agree to:",
          items: [
            "Provide accurate and up-to-date information",
            "Maintain account confidentiality",
            "Not share course materials with third parties",
            "Respect intellectual property rights",
            "Maintain respectful behavior during classes",
          ],
        },
        payments: {
          title: "4. Payments and Refunds",
          desc: "Payment and refund policy:",
          items: [
            "Payments must be made in advance",
            "Cancellations accepted with 24 hours notice",
            "Refunds processed within 5-7 business days",
            "No refunds for classes already taken",
          ],
        },
        intellectual: {
          title: "5. Intellectual Property",
          desc: "All course materials, including but not limited to:",
          items: [
            "Audiovisual content",
            "Documents and presentations",
            "Exercises and evaluations",
            "Teaching methodology",
          ],
          additional:
            "Are the exclusive property of our company and are protected by intellectual property laws.",
        },
        liability: {
          title: "6. Limitation of Liability",
          desc: "We are not responsible for:",
          items: [
            "Technical issues beyond our control",
            "Data loss or service interruptions",
            "Specific learning outcomes",
            "Indirect or consequential damages",
          ],
        },
        modifications: {
          title: "7. Modifications",
          desc: "We reserve the right to modify these terms at any time. Changes will take effect immediately after posting on the website. Continued use of our services after such changes constitutes your acceptance of the new terms.",
        },
        contact: {
          title: "8. Contact",
          desc: "For any inquiries about these terms and conditions, you can contact us at:",
          email: "laiamartinezosorio0@gmail.com",
          phone: "+34 684 132 605",
        },
      },
    },
  },
  es: {
    // Navbar
    nav: {
      classes: "Servicios",
      about: "Sobre Mí",
      contact: "Contáctame",
    },

    // Hero
    hero: {
      greeting: "Hola, soy",
      role: "Profesora de",
      english: "Inglés",
      and: "y",
      spanish: "Español",
      description:
        "Clases online personalizadas que se adaptan a tu ritmo y objetivos. Metodología práctica, conversacional y efectiva.",
      cta: "Empieza Ahora",
      experience: "años de experiencia",
      students: "estudiantes",
    },

    // Classes
    classes: {
      my: "Mis",
      services: "Servicios",
      main: "Clases de Inglés y Español",
      live: {
        title: "Sesiones en vivo",
        desc: "Sesión de 1 hora por videollamada (Skype, Zoom, Classgap)",
      },
      levels: {
        title: "Todos los niveles",
        desc: "Adaptamos el contenido a tus necesidades",
      },
      conversation: {
        title: "Práctica conversacional",
        desc: "Desarrolla fluidez y confianza con ejercicios prácticos",
      },
      schedule: {
        title: "Horarios flexibles",
        desc: "Programa tus clases cuando mejor te convenga",
      },
      exam: {
        title: "Preparación para exámenes",
        desc: "Estrategias probadas y materiales exclusivos para aprobar tu examen",
      },
      start: "Empieza ahora",
    },

    // About
    about: {
      title: "Sobre",
      me: "Mí",
      description: {
        1: "¡Hola! Soy Laia, profesora española de 23 años con 4 años de experiencia enseñando inglés y 2 años enseñando español. Mi pasión por los idiomas me llevó a formarme en academias y con profesores privados, culminando con una estancia en Inglaterra para perfeccionar mi inglés. Me emociona ver el progreso de mis estudiantes y cómo ganan confianza al comunicarse en un nuevo idioma.",
        2: "Como profesora, combino mi formación con mi propia experiencia aprendiendo idiomas. Esto me permite identificar los desafíos específicos de cada lengua y adaptar mis clases para superarlos eficazmente. Mi enfoque amigable y conversacional ayuda a crear un ambiente cómodo donde el aprendizaje fluye naturalmente.",
      },
      international: {
        title: "Experiencia Internacional",
        desc: "Formación y experiencia docente en Inglaterra.",
      },
      dynamic: {
        title: "Clases Dinámicas",
        desc: "Sesiones interactivas que mantienen tu interés y motivación.",
      },
      results: {
        title: "Resultados Garantizados",
        desc: "Valoración de 5 estrellas basada en 7 opiniones verificadas. Perfil verificado con datos comprobados.",
      },
    },

    // Testimonials
    testimonials: {
      what: "Lo Que Dicen",
      students: "Mis Alumnos",
      saying: "",
    },

    // CTA
    cta: {
      title: "Comencemos tu",
      highlight: "Aprendizaje",
      description:
        "Quiero ayudarte a alcanzar tus metas en inglés y español a través de experiencias de aprendizaje dinámicas, amigables e interactivas.",
      button: "Contáctame",
    },

    // Footer
    footer: {
      links: "Enlaces",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
      rights: "Todos los derechos reservados.",
    },

    // Special sections with nested structure
    "404": {
      title: "Página No Encontrada",
      description: "La página que buscas no existe o ha sido movida.",
      home: "Volver al Inicio",
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización:",
      sections: {
        info: {
          title: "1. Información que Recopilamos",
          desc: "Recopilamos la siguiente información cuando utiliza nuestros servicios:",
          items: [
            "Información de contacto (correo electrónico, teléfono)",
            "Información de perfil académico y nivel de idioma",
            "Registros de sesiones y progreso en el aprendizaje",
            "Información técnica sobre su dispositivo y conexión",
          ],
        },
        use: {
          title: "2. Uso de la Información",
          desc: "Utilizamos su información personal para:",
          items: [
            "Proporcionar y personalizar nuestros servicios educativos",
            "Comunicarnos con usted sobre sus clases y progreso",
            "Mejorar nuestros métodos de enseñanza y materiales",
            "Cumplir con obligaciones legales y proteger nuestros derechos",
          ],
        },
        protection: {
          title: "3. Protección de Datos",
          desc: "Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal:",
          items: [
            "Encriptación de datos sensibles",
            "Acceso restringido a información personal",
            "Monitoreo regular de sistemas de seguridad",
            "Capacitación del personal en protección de datos",
          ],
        },
        rights: {
          title: "4. Sus Derechos",
          desc: "Usted tiene los siguientes derechos respecto a sus datos personales:",
          items: [
            "Acceder a sus datos personales",
            "Rectificar datos incorrectos",
            "Solicitar la eliminación de sus datos",
            "Oponerse al procesamiento de sus datos",
            "Portabilidad de datos",
          ],
        },
        cookies: {
          title: "5. Cookies y Tecnologías Similares",
          desc: "Utilizamos cookies y tecnologías similares para:",
          items: [
            "Mantener su sesión activa",
            "Recordar sus preferencias",
            "Analizar el uso de nuestro sitio web",
            "Mejorar la experiencia del usuario",
          ],
        },
        contact: {
          title: "6. Contacto",
          desc: "Para cualquier consulta sobre esta política de privacidad o el tratamiento de sus datos personales, puede contactarnos en:",
          email: "laiamartinezosorio0@gmail.com",
          phone: "+34 684 132 605",
        },
      },
    },
    terms: {
      title: "Términos y Condiciones",
      lastUpdated: "Última actualización:",
      sections: {
        acceptance: {
          title: "1. Aceptación de los Términos",
          desc: "Al acceder y utilizar nuestros servicios, usted acepta estar vinculado por estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.",
        },
        service: {
          title: "2. Descripción del Servicio",
          desc: "Ofrecemos servicios de enseñanza de idiomas que incluyen:",
          items: [
            "Clases individuales en línea",
            "Material didáctico digital",
            "Evaluaciones de progreso",
            "Recursos complementarios de aprendizaje",
          ],
        },
        conditions: {
          title: "3. Condiciones de Uso",
          desc: "Al utilizar nuestros servicios, usted se compromete a:",
          items: [
            "Proporcionar información precisa y actualizada",
            "Mantener la confidencialidad de su cuenta",
            "No compartir materiales del curso con terceros",
            "Respetar los derechos de propiedad intelectual",
            "Mantener un comportamiento respetuoso durante las clases",
          ],
        },
        payments: {
          title: "4. Pagos y Reembolsos",
          desc: "Política de pagos y reembolsos:",
          items: [
            "Los pagos deben realizarse por adelantado",
            "Se aceptan cancelaciones con 24 horas de anticipación",
            "Los reembolsos se procesan en un plazo de 5-7 días hábiles",
            "No hay reembolsos por clases ya tomadas",
          ],
        },
        intellectual: {
          title: "5. Propiedad Intelectual",
          desc: "Todos los materiales del curso, incluyendo pero no limitado a:",
          items: [
            "Contenido audiovisual",
            "Documentos y presentaciones",
            "Ejercicios y evaluaciones",
            "Metodología de enseñanza",
          ],
          additional:
            "Son propiedad exclusiva de nuestra empresa y están protegidos por leyes de propiedad intelectual.",
        },
        liability: {
          title: "6. Limitación de Responsabilidad",
          desc: "No nos hacemos responsables por:",
          items: [
            "Problemas técnicos fuera de nuestro control",
            "Pérdida de datos o interrupciones del servicio",
            "Resultados específicos del aprendizaje",
            "Daños indirectos o consecuentes",
          ],
        },
        modifications: {
          title: "7. Modificaciones",
          desc: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado de nuestros servicios después de dichos cambios constituye su aceptación de los nuevos términos.",
        },
        contact: {
          title: "8. Contacto",
          desc: "Para cualquier consulta sobre estos términos y condiciones, puede contactarnos en:",
          email: "laiamartinezosorio0@gmail.com",
          phone: "+34 684 132 605",
        },
      },
    },
  },
};
