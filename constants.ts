import { AreaType, Course, Sede } from './types';

export const SEDES: Sede[] = [
  {
    name: "Sede Central",
    address: "Bartolomé Mitre 970",
    contact: "Tel: 4359-5016 | culturaycap@sec.org.ar",
    color: "bg-blue-600"
  },
  {
    name: "Sede Chacarita",
    address: "Fraga 638",
    contact: "Tel: 4552-3340 | Whatsapp: 11-6300-8020",
    color: "bg-orange-500"
  },
  {
    name: "Sede Flores",
    address: "Pasaje La Porteña 14 (Alt. Av. Rivadavia 7200)",
    contact: "Tel: 4611-4213 | Whatsapp: 11 7369-6048",
    color: "bg-green-600"
  },
  {
    name: "Sede Villa Urquiza",
    address: "Av. Monroe 5354",
    contact: "Tel: 4524-0111 | Whatsapp: 15-4075-1695",
    color: "bg-purple-600"
  }
];

export const COURSES: Course[] = [
  // --- INFORMATICA ---
  {
    id: "inf-1",
    title: "Operador de Informática para Administración y Gestión",
    area: AreaType.INFORMATICA,
    content: "Windows, Internet, Procesadores de Texto (Word), Planillas de Cálculo (Excel), Presentaciones (PowerPoint), Bases de Datos (Access).",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "2 bimestres",
    locations: [
      "Sede Central: Martes y Jueves 09:00, 11:00, 13:00, 15:00, 17:00, 19:00 hs",
      "Anexo Flores: Miércoles y Viernes 16:00, 19:00 hs",
      "Anexo Urquiza: Martes y Jueves 11:00 hs; Miércoles y Viernes 15:00 hs"
    ]
  },
  {
    id: "inf-excel",
    title: "Procesamiento de Datos (Excel)",
    area: AreaType.INFORMATICA,
    content: "Planillas de cálculo, funciones condicionales, gráficos, bases de datos.",
    requirements: "Mayor de 18 años, primario completo y Sis. Informáticos.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Miér/Vier 10:00, 15:00 hs; Mar/Jue 18:00 hs",
      "Anexo Chacarita: Martes y Jueves 19:00 hs",
      "Anexo Flores: Mar/Jue/Vier 09:00 hs; Mar/Jue 16:00 hs"
    ]
  },
  {
    id: "inf-word-ppt",
    title: "Administración (Word) y Gestión de Documentos (PowerPoint)",
    area: AreaType.INFORMATICA,
    content: "Procesador de textos y generador de presentaciones gráficas.",
    requirements: "Mayor de 18 años, primario completo y módulo Sistemas Informáticos.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 09:00, 13:00 hs; Miér/Vier 15:00, 19:00 hs",
      "Anexo Flores: Mar/Jue/Vier 09:00 hs; Mar/Jue 16:00 hs"
    ]
  },
  {
    id: "inf-trayecto",
    title: "Trayecto: Operador de Informática",
    area: AreaType.INFORMATICA,
    content: "Trayecto completo para Auxiliar Administrativo.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié/Vie 11:00 a 14:00; Lun/Mar/Jue 16:00 a 19:00 hs",
      "Anexo Chacarita: Lun/Mié/Vie 15:00 a 19:00 hs",
      "Anexo Flores: Lun/Mié/Vie 09:00 a 13:00 hs"
    ]
  },
  {
    id: "inf-reparador",
    title: "Reparador de Computadoras Personales",
    area: AreaType.INFORMATICA,
    content: "Hardware, Sistemas Operativos, Diagnóstico de fallas, mantenimiento, detección de amenazas.",
    requirements: "Mayor de 18 años, ciclo básico secundario.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Miércoles y Viernes 15:00, 18:00 hs"]
  },
  {
    id: "inf-redes",
    title: "Tecnología de Redes",
    area: AreaType.INFORMATICA,
    content: "Topologías, medios de transmisión, cableado estructurado, montaje.",
    requirements: "Mayor de 18 años, ciclo básico secundario.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Martes y Jueves 15:00, 18:00 hs"]
  },
  {
    id: "inf-python",
    title: "Programador (Python)",
    area: AreaType.INFORMATICA,
    content: "Programación orientada a objetos, bases de datos. Python como lenguaje multiparadigma.",
    requirements: "Mayor de 18 años, secundario completo.",
    duration: "Anual",
    locations: ["Sede Central: Lunes y Viernes 18:30 hs"]
  },
  {
    id: "inf-illustrator",
    title: "Diseño Gráfico (Adobe Illustrator)",
    area: AreaType.INFORMATICA,
    content: "Dibujos, transformación, contorno, relleno, trabajos con archivos vectoriales.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Miér/Vier 09:00, 12:30 hs; Mar/Jue 16:00, 18:00 hs"]
  },
  {
    id: "inf-photoshop",
    title: "Retoque Fotográfico (Photoshop)",
    area: AreaType.INFORMATICA,
    content: "Procesamiento digital de imágenes, escaneo, efectos especiales.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Miércoles y Viernes 15:00, 18:00 hs",
      "Anexo Flores: Lunes y Miércoles 09:00 hs"
    ]
  },
  {
    id: "inf-web",
    title: "Diseñador de Páginas Web I y II",
    area: AreaType.INFORMATICA,
    content: "HTML, CSS, diseño responsive, hosting, transferencia de archivos.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 12:30, 15:00, 19:00 hs",
      "Anexo Chacarita: Martes y Viernes 12:00 hs",
      "Anexo Flores: Martes y Jueves 16:00, 18:30 hs"
    ]
  },
  {
    id: "inf-java",
    title: "Programador Java",
    area: AreaType.INFORMATICA,
    content: "Técnicas de programación, POO, Base de Datos.",
    requirements: "Mayor de 18 años, secundario completo.",
    duration: "Anual",
    locations: [
      "Sede Central: Miércoles y Viernes 10:00 hs; Martes y Jueves 15:00 hs",
      "Anexo Chacarita: Martes y Viernes 16:00 hs"
    ]
  },
  {
    id: "inf-marketing",
    title: "Marketing Digital",
    area: AreaType.INFORMATICA,
    content: "Estrategias de promoción, manejo de plataformas, redes sociales.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 10:00, 18:30 hs",
      "Anexo Chacarita: Lun/Mié 12:00, 15:00 hs",
      "Anexo Flores: Lun/Mié 11:30, 14:00, 17:00, 19:00 hs",
      "Anexo Urquiza: Lunes 09:00 hs"
    ]
  },
  {
    id: "inf-secretarias",
    title: "Computación para Secretarias y Oficinistas",
    area: AreaType.INFORMATICA,
    content: "Redacción, mailing, presentaciones, excel.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 11:00 hs; Mié/Vie 16:00, 18:00 hs",
      "Anexo Chacarita: Lun/Mié 09:00 hs; Mar/Jue 16:00 hs; Lun/Mar/Mié 20:00 hs",
      "Anexo Flores: Mar/Jue 09:00, 12:00 hs",
      "Anexo Urquiza: Mié/Vie 16:00, 18:00 hs"
    ]
  },
  {
    id: "inf-premiere",
    title: "Edición de Imagen y Sonido (Premiere)",
    area: AreaType.INFORMATICA,
    content: "Edición de video, timeline, render, efectos y transiciones.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Martes y Jueves 17:00 hs"]
  },
  {
    id: "inf-ia",
    title: "Taller de IA orientado a Administración",
    area: AreaType.INFORMATICA,
    content: "Uso de IA como asistente administrativo, prompts, análisis de datos.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: ["Anexo Flores: Mar/Jue/Vie 13:00 hs"]
  },
  {
    id: "inf-celulares",
    title: "Uso de Celulares",
    area: AreaType.INFORMATICA,
    content: "Android/iOS, configuración, navegación, redes sociales.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Miércoles 09:00 hs",
      "Anexo Chacarita: Mar/Jue 13:00 hs; Mié/Vie 13:00 hs",
      "Anexo Urquiza: Lun 13:00 hs; Mar 13:00 hs"
    ]
  },
  {
    id: "inf-adultos",
    title: "Computación para Adultos Mayores",
    area: AreaType.INFORMATICA,
    content: "Primeros pasos, teclado, mouse, internet, correo.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: ["Anexo Urquiza: Viernes 09:00 hs"]
  },

  // --- OFICIOS ---
  {
    id: "of-clima",
    title: "Instalador y Reparador de Equipos de Climatización",
    area: AreaType.OFICIOS,
    content: "Termomecánica, montaje, instalación, diagnóstico y reparación.",
    requirements: "Mayor de 18 años, ciclo básico secundario.",
    duration: "Anual",
    locations: ["Sede Central: Mar/Mié/Jue 17:00, 19:00 hs"]
  },
  {
    id: "of-cerrajeria",
    title: "Cerrajería",
    area: AreaType.OFICIOS,
    content: "Mecanismos, cerraduras Yale, doble paleta.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 19:00 hs",
      "Anexo Urquiza: Lun/Mié 16:00, 18:00 hs"
    ]
  },
  {
    id: "of-cerrajeria-comp",
    title: "Cerrajería Computarizada",
    area: AreaType.OFICIOS,
    content: "Cerraduras de alta seguridad, duplicados Fichet, maquinaria.",
    requirements: "Aprobado curso Cerrajería.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Martes y Jueves 17:00 hs"]
  },
  {
    id: "of-electricidad",
    title: "Circuitos Eléctricos y Mediciones",
    area: AreaType.OFICIOS,
    content: "Medición, circuitos simples, conexiones, seguridad.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié 10:00, 13:00, 16:00, 18:00 hs",
      "Anexo Urquiza: Martes y Jueves 17:00, 19:00 hs"
    ]
  },

  // --- CONTABLE ---
  {
    id: "con-auxiliar",
    title: "Auxiliar de Contabilidad",
    area: AreaType.CONTABLE,
    content: "Libros, asientos, balance general, ajustes.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar 09-12; Mié 09-12; Lun/Mié 17:00 hs",
      "Anexo Chacarita: Martes 15:00 hs",
      "Anexo Flores: Lun/Mié 09:00, 18:00, 19:45 hs",
      "Anexo Urquiza: Mié/Vie 19:00 hs; Mié 09:00 hs"
    ]
  },
  {
    id: "con-ayudante",
    title: "Ayudante de Contaduría",
    area: AreaType.CONTABLE,
    content: "Valuación activos/pasivos, ajuste por inflación, normas legales.",
    requirements: "Secundario contable o Auxiliar aprobado.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lunes y Miércoles 19:00 hs",
      "Anexo Flores: Martes y Jueves 19:30 hs"
    ]
  },
  {
    id: "con-haberes",
    title: "Liquidación de Haberes",
    area: AreaType.CONTABLE,
    content: "Cargas sociales, horas extras, SAC, vacaciones, indemnizaciones.",
    requirements: "Mayor de 18 años, ciclo básico secundario.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié 18:00, 19:30 hs; Mar/Jue 10:00 hs",
      "Anexo Chacarita: Mar 18:00 hs; Jue 10:00 hs",
      "Anexo Flores: Mar/Jue 10:30, 18:00 hs",
      "Anexo Urquiza: Lun 09:00 hs; Mar 15:00 hs"
    ]
  },
  {
    id: "con-consorcios",
    title: "Administración de Consorcios",
    area: AreaType.CONTABLE,
    content: "Ley Propiedad Horizontal, expensas, mantenimiento.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié 10:30 hs; Mar/Jue 17:00, 19:00 hs",
      "Anexo Chacarita: Jueves 15:00, 18:00 hs",
      "Anexo Flores: Lun/Mié 18:00, 19:30 hs",
      "Anexo Urquiza: Mar/Jue 09:00 hs; Mié/Vie 17:00 hs"
    ]
  },
  {
    id: "con-marketing-cons",
    title: "Marketing Servicios para Adm. Consorcios",
    area: AreaType.CONTABLE,
    content: "Marketing estratégico, venta de servicios, conducción asambleas.",
    requirements: "Curso Adm. Consorcios aprobado.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Viernes 18:00 hs"]
  },
  {
    id: "con-juridico",
    title: "Auxiliar Jurídico Contable",
    area: AreaType.CONTABLE,
    content: "Protocolo, expedientes, normas AFIP, funcionamiento juzgados.",
    requirements: "Secundario contable o Auxiliar aprobado.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Viernes 18:00 hs"]
  },
  {
    id: "con-gestion",
    title: "Herramientas Informáticas Gestión Contable",
    area: AreaType.CONTABLE,
    content: "Sistemas de gestión, recibos, estados patrimoniales.",
    requirements: "Conocimientos contables.",
    duration: "1 cuatrimestre",
    locations: ["Anexo Flores: Martes y Jueves 09:00, 19:00 hs"]
  },

  // --- ESTETICA ---
  {
    id: "est-maquillador-1",
    title: "Maquillador/a Profesional (1er Tramo)",
    area: AreaType.ESTETICA,
    content: "Maquillaje social, correctivo, artístico. Gestión del trabajo.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "Anual",
    locations: [
      "Sede Central: Lunes 11-15 hs; Miér 12:30-16:30, 17:00-20:30 hs",
      "Anexo Chacarita: Jueves 17:00 hs",
      "Anexo Urquiza: Viernes 18:00 hs"
    ]
  },
  {
    id: "est-maquillador-2",
    title: "Maquillador/a Profesional (2do Tramo)",
    area: AreaType.ESTETICA,
    content: "Maquillaje artístico, moda, fotografía, editorial.",
    requirements: "1er tramo aprobado.",
    duration: "Anual",
    locations: [
      "Sede Central: Lunes 16:00 hs",
      "Anexo Chacarita: Martes 17:00 hs",
      "Anexo Urquiza: Jueves 17:00 hs"
    ]
  },
  {
    id: "est-manicuro",
    title: "Manicuro/a",
    area: AreaType.ESTETICA,
    content: "Cuidado de manos y belleza de pies.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun 10-13, 16-19 hs",
      "Anexo Chacarita: Lun/Vie 12:00 hs",
      "Anexo Flores: Lun 09:00, 15:00 hs"
    ]
  },
  {
    id: "est-peluquero",
    title: "Peluquero/a",
    area: AreaType.ESTETICA,
    content: "Corte, peinado, transformación, estructura.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "1 año y medio",
    locations: [
      "Sede Central: Mar 10-14, 16-20 hs; Jue 10:00 hs",
      "Anexo Chacarita: Miér 09:00, 15:00 hs"
    ]
  },
  {
    id: "est-masoterapeuta",
    title: "Especialista en Tratamientos Corporales (Masoterapeuta)",
    area: AreaType.ESTETICA,
    content: "Anatomía, masajes circulatorios, reductores, relax.",
    requirements: "Mayor de 18 años.",
    duration: "Anual",
    locations: [
      "Sede Central: Mar 09-12; Vie 15-18, 18-21 hs",
      "Anexo Chacarita: Viernes 15:00, 18:00 hs"
    ]
  },
  {
    id: "est-cosmetologia",
    title: "Especialista en Tratamientos Faciales (Cosmetología)",
    area: AreaType.ESTETICA,
    content: "Piel, limpieza, peeling, acné, masofilaxia facial.",
    requirements: "Mayor de 18 años.",
    duration: "Anual",
    locations: [
      "Sede Central: Mar 09-12, 15-18, 18-21 hs",
      "Anexo Chacarita: Lun 09:00; Vie 09:00 hs",
      "Anexo Urquiza: Mié 15:00, 18:00; Jue 14:00 hs"
    ]
  },

  // --- ARTISTICA ---
  {
    id: "art-foto",
    title: "Fotógrafo/a",
    area: AreaType.ARTISTICA,
    content: "Cámara, exposición, composición, iluminación.",
    requirements: "Mayor de 18 años, ciclo básico secundario.",
    duration: "Anual",
    locations: ["Sede Central: Lun/Mar/Jue 15:00, 19:00 hs; Mié/Vie 17:00 hs"]
  },

  // --- TEXTIL ---
  {
    id: "tex-modista-1",
    title: "Confeccionista a Medida (1er Tramo)",
    area: AreaType.TEXTIL,
    content: "Moldería base, corte, confección simple.",
    requirements: "Mayor de 18 años, primario completo.",
    duration: "Anual",
    locations: ["Sede Central: Lun/Mié 14:00, 16:00, 18:00 hs"]
  },
  {
    id: "tex-modista-2",
    title: "Confeccionista a Medida (2do Tramo)",
    area: AreaType.TEXTIL,
    content: "Prendas complejas, gestión.",
    requirements: "1er tramo aprobado.",
    duration: "1 cuatrimestre",
    locations: ["Sede Central: Viernes 17:00 hs"]
  },

  // --- IDIOMAS ---
  {
    id: "idi-ing-1",
    title: "Inglés Británico I",
    area: AreaType.IDIOMAS,
    content: "Nivel inicial.",
    requirements: "Mayor de 18 años.",
    duration: "Anual",
    locations: [
      "Sede Central: Mar/Jue 18:00 hs",
      "Anexo Chacarita: Jue 18:00; Mié 18:00 hs",
      "Anexo Flores: Lun/Mié 18:00, 19:30; Mar/Jue 09:00, 18:00 hs",
      "Anexo Urquiza: Viernes 18:00 hs"
    ]
  },
  {
    id: "idi-ing-2",
    title: "Inglés Británico II",
    area: AreaType.IDIOMAS,
    content: "Nivel básico.",
    requirements: "Nivel I aprobado.",
    duration: "Anual",
    locations: [
      "Sede Central: Lun/Mié 17:00; Mar/Jue 18:00, 19:30 hs",
      "Anexo Flores: Mar/Jue 10:30, 19:30 hs",
      "Anexo Urquiza: Mar 18:00; Mar/Jue 12:30 hs"
    ]
  },
  {
    id: "idi-ing-3",
    title: "Inglés Británico III",
    area: AreaType.IDIOMAS,
    content: "Nivel intermedio.",
    requirements: "Nivel II aprobado.",
    duration: "Anual",
    locations: [
      "Anexo Flores: Lun/Mié 09:00; Mar/Jue 18:00 hs",
      "Anexo Urquiza: Mar/Jue 11:00; Jue 18:00 hs"
    ]
  },
  {
    id: "idi-ing-4",
    title: "Inglés Británico IV",
    area: AreaType.IDIOMAS,
    content: "Nivel avanzado.",
    requirements: "Nivel III aprobado.",
    duration: "Anual",
    locations: [
      "Sede Central: Lun/Mié 18:00, 19:30 hs",
      "Anexo Chacarita: Varias opciones 18:00 hs",
      "Anexo Flores: Lun/Mié 10:30; Mar/Jue 19:30 hs",
      "Anexo Urquiza: Miércoles 10:00 hs"
    ]
  },
  {
    id: "idi-ing-5",
    title: "Inglés Británico V",
    area: AreaType.IDIOMAS,
    content: "Nivel superior.",
    requirements: "Nivel IV aprobado.",
    duration: "Anual",
    locations: [
      "Sede Central: Lun/Mié 19:30 hs",
      "Anexo Chacarita: Miércoles 18:00 hs",
      "Anexo Flores: Viernes 09:00 hs"
    ]
  },
  {
    id: "idi-por-1",
    title: "Portugués I",
    area: AreaType.IDIOMAS,
    content: "Nivel inicial.",
    requirements: "Mayor de 18 años.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié 15:00 hs",
      "Anexo Chacarita: Lunes 18:00 hs",
      "Anexo Flores: Mar/Vie 18:00 hs",
      "Anexo Urquiza: Mar/Vie 13:30 hs"
    ]
  },
  {
    id: "idi-por-2",
    title: "Portugués II",
    area: AreaType.IDIOMAS,
    content: "Nivel básico.",
    requirements: "Nivel I aprobado.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Lun/Mié 17:00 hs",
      "Anexo Chacarita: Jueves 15:00 hs"
    ]
  },
  {
    id: "idi-por-3",
    title: "Portugués III",
    area: AreaType.IDIOMAS,
    content: "Nivel intermedio.",
    requirements: "Nivel II aprobado.",
    duration: "1 cuatrimestre",
    locations: [
      "Sede Central: Mar/Jue 15:00 hs",
      "Anexo Chacarita: Jueves 18:00 hs",
      "Anexo Flores: Mar/Vie 19:30 hs",
      "Anexo Urquiza: Martes 10:30 hs"
    ]
  },
  {
    id: "idi-por-4",
    title: "Portugués IV",
    area: AreaType.IDIOMAS,
    content: "Nivel avanzado.",
    requirements: "Nivel III aprobado.",
    duration: "1 cuatrimestre",
    locations: [
      "Anexo Bartolomé Mitre: Mar/Jue 17:00 hs",
      "Anexo Chacarita: Lunes 15:00 hs",
      "Anexo Urquiza: Viernes 10:30 hs"
    ]
  },
  {
    id: "idi-por-5",
    title: "Portugués V",
    area: AreaType.IDIOMAS,
    content: "Nivel superior.",
    requirements: "Nivel IV aprobado.",
    duration: "1 cuatrimestre",
    locations: ["Anexo Flores: Miércoles 18:00 hs"]
  }
];