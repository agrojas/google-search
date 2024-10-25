// src/mocks/script-results.ts
export type SearchResult = {
  title: string;
  url: string;
  displayUrl?: string;
  description?: string;
  type?: "medical" | "notes" | "general";
  content?: string;
  source?: string;
  questions?: string[];
};

export type SearchResults = {
  [key: string]: SearchResult[];
};

export const SCRIPT_RESULTS: SearchResults = {
  ORTIZ: [
    {
      title: "Dr. Ortiz - Clínica Galilea | Medicina Funcional",
      url: "https://clinicagalilea.com/dr-ortiz",
      displayUrl: "clinicagalilea.com › especialistas",
      description:
        "Especialista en Medicina Funcional y Sistémica. Más de 15 años de experiencia en tratamientos integrativos. Consultas presenciales y virtuales disponibles. Horarios flexibles.",
      type: "medical",
    },
    {
      title: "Equipo Médico - Clínica Galilea | Dr. Ortiz",
      url: "https://clinicagalilea.com/equipo-medico",
      displayUrl: "clinicagalilea.com › equipo-medico",
      description:
        "El Dr. Ortiz lidera nuestro equipo de medicina funcional. Conoce su trayectoria, especialidades y enfoque terapéutico integrador. Formación internacional en medicina funcional.",
      type: "medical",
    },
    {
      title: "Turnos Online - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/turnos/dr-ortiz",
      displayUrl: "clinicagalilea.com › turnos",
      description:
        "Reserva tu consulta con el Dr. Ortiz. Sistema de turnos online 24/7. Primera consulta y seguimientos. Obras sociales y prepagas aceptadas.",
      type: "medical",
    },
    {
      title: "Clínica Galilea - Sede Central | Atención Personalizada",
      url: "https://clinicagalilea.com/sedes/central",
      displayUrl: "clinicagalilea.com › sedes",
      description:
        "Visita nuestra sede central donde atiende el Dr. Ortiz. Instalaciones modernas, tecnología de última generación. Estacionamiento propio y fácil acceso.",
      type: "medical",
    },
    {
      title: "Medicina Funcional - Tratamientos | Clínica Galilea",
      url: "https://clinicagalilea.com/tratamientos-funcionales",
      displayUrl: "clinicagalilea.com › tratamientos",
      description:
        "Descubre los tratamientos funcionales del Dr. Ortiz. Abordaje integral de patologías crónicas, trastornos metabólicos y enfermedades autoinmunes.",
      type: "medical",
    },
    {
      title: "Dr. Ortiz - Conferencias y Eventos | Clínica Galilea",
      url: "https://clinicagalilea.com/eventos/conferencias",
      displayUrl: "clinicagalilea.com › eventos",
      description:
        "Calendario de conferencias y talleres del Dr. Ortiz. Temas: medicina funcional, nutrición terapéutica y salud integrativa. Inscripciones abiertas.",
      type: "medical",
    },
    {
      title: "Blog Salud - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/blog/dr-ortiz",
      displayUrl: "clinicagalilea.com › blog",
      description:
        "Artículos y consejos de salud por el Dr. Ortiz. Últimas investigaciones en medicina funcional, casos clínicos y recomendaciones para pacientes.",
      type: "medical",
    },
    {
      title: "Opiniones - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/opiniones/dr-ortiz",
      displayUrl: "clinicagalilea.com › opiniones",
      description:
        "Testimonios de pacientes del Dr. Ortiz. Experiencias reales con tratamientos funcionales. Valoración promedio 4.8/5 basada en más de 200 opiniones.",
      type: "medical",
    },
    {
      title: "Clínica Galilea (@ClinicaGalilea) | Twitter",
      url: "https://twitter.com/ClinicaGalilea",
      displayUrl: "twitter.com › ClinicaGalilea",
      description:
        "Sigue las actualizaciones del Dr. Ortiz y Clínica Galilea. Noticias, eventos y consejos de salud. Mantente informado sobre nuevos tratamientos y servicios.",
      type: "medical",
    },
    {
      title: "Dr. Ortiz - Entrevistas | Clínica Galilea YouTube",
      url: "https://youtube.com/ClinicaGalilea",
      displayUrl: "youtube.com › ClinicaGalilea",
      description:
        "Canal oficial de Clínica Galilea. Entrevistas y charlas del Dr. Ortiz sobre medicina funcional. Videos educativos y casos de éxito.",
      type: "medical",
    },
    {
      title: "Clínica Galilea - Servicios Médicos | Dr. Ortiz",
      url: "https://clinicagalilea.com/servicios",
      displayUrl: "clinicagalilea.com › servicios",
      description:
        "Conoce todos nuestros servicios médicos. Consultas con el Dr. Ortiz, análisis funcionales, terapias complementarias y programas de seguimiento personalizados.",
      type: "medical",
    },
    {
      title: "Contacto - Dr. Ortiz | Clínica Galilea",
      url: "https://clinicagalilea.com/contacto",
      displayUrl: "clinicagalilea.com › contacto",
      description:
        "Información de contacto del Dr. Ortiz. Consultas, dudas y emergencias. Horarios de atención: Lunes a Viernes de 9:00 a 18:00hs.",
      type: "medical",
    },
  ],
  BONAR: [
    {
      title: "Bonar Autopartes",
      url: "/bonar",
      displayUrl: "www.bonar-autopartes.com › inicio",
      description: "Bonar autopartes, repuestos, venta mayoristas.",
      type: "notes",
    },
    {
      title: "Venta Autopuntes - Material académico verificado",
      url: "https://autopuntes.com/venta",
      displayUrl: "autopuntes.com › venta",
      description:
        "Marketplace de apuntes y materiales de estudio revisados...",
      type: "notes",
    },
    {
      title: "ElectroHouse - Electrónica y Hogar",
      url: "/electrohouse",
      displayUrl: "www.electrohouse.com › inicio",
      description: "Venta de artículos electrónicos y para el hogar.",
      type: "notes",
    },
    {
      title: "La Casa del Estudiante",
      url: "/casadelestudiante",
      displayUrl: "www.casadelestudiante.com › inicio",
      description: "Apuntes, guías de estudio y asesoría académica.",
      type: "notes",
    },
    {
      title: "Autopartes Soluciones",
      url: "/autopartessoluciones",
      displayUrl: "www.autopartessoluciones.com › productos",
      description: "Repuestos y soluciones para automóviles de todo tipo.",
      type: "notes",
    },
    {
      title: "Apuntes Universitarios",
      url: "https://apuntesuniversitarios.com",
      displayUrl: "apuntesuniversitarios.com › inicio",
      description: "Notas y apuntes para distintas carreras universitarias.",
      type: "notes",
    },
    {
      title: "Accesorios y Repuestos para Autos",
      url: "/repuestosautos",
      displayUrl: "www.repuestosautos.com › inicio",
      description: "Venta de accesorios y repuestos de alta calidad.",
      type: "notes",
    },
    {
      title: "Biblioteca Digital de Apuntes",
      url: "https://bibliotecaapuntes.com",
      displayUrl: "bibliotecaapuntes.com › inicio",
      description: "Colección de apuntes académicos en formato digital.",
      type: "notes",
    },
    {
      title: "Punto Auto - Autopartes al Mejor Precio",
      url: "/puntoauto",
      displayUrl: "www.puntoauto.com › inicio",
      description: "Distribuidor de autopartes a precios accesibles.",
      type: "notes",
    },
    {
      title: "Material Didáctico Escolar",
      url: "/materialdidactico",
      displayUrl: "www.materialdidactico.com › inicio",
      description: "Apuntes y recursos para nivel escolar y universitario.",
      type: "notes",
    },
    {
      title: "Autopartes Repuestos Rápidos",
      url: "/repuestosrapidos",
      displayUrl: "www.repuestosrapidos.com › inicio",
      description: "Provisión rápida de repuestos y accesorios automotrices.",
      type: "notes",
    },
    {
      title: "Guía de Estudio Secundaria",
      url: "/guiasecundaria",
      displayUrl: "www.guiasecundaria.com › inicio",
      description: "Recursos de estudio para estudiantes de secundaria.",
      type: "notes",
    },
    {
      title: "Accesorios Auto Pro",
      url: "/accesoriosautopro",
      displayUrl: "www.accesoriosautopro.com › inicio",
      description:
        "Accesorios de calidad para automóviles de todas las marcas.",
      type: "notes",
    },
    {
      title: "Tienda de Apuntes Académicos",
      url: "/tiendaapuntes",
      displayUrl: "www.tiendaapuntes.com › inicio",
      description: "Venta de apuntes académicos por materia y carrera.",
      type: "notes",
    },
    {
      title: "Motor Partes Express",
      url: "/motorpartes",
      displayUrl: "www.motorpartes.com › inicio",
      description: "Repuestos especializados para motores de autos.",
      type: "notes",
    },
    {
      title: "Apuntes Online para Universitarios",
      url: "/apuntesonline",
      displayUrl: "www.apuntesonline.com › inicio",
      description:
        "Material de estudio para universitarios en formato digital.",
      type: "notes",
    },
    {
      title: "Mundo Auto - Autopartes y Repuestos",
      url: "/mundoauto",
      displayUrl: "www.mundoauto.com › inicio",
      description: "Amplia variedad de autopartes para diferentes marcas.",
      type: "notes",
    },
    {
      title: "Red de Apuntes Académicos",
      url: "/redapuntes",
      displayUrl: "www.redapuntes.com › inicio",
      description: "Comunidad de apuntes y recursos educativos compartidos.",
      type: "notes",
    },
    {
      title: "Repuestos AutoCenter",
      url: "/autocenter",
      displayUrl: "www.autocenter.com › inicio",
      description: "Tienda de repuestos y accesorios para autos.",
      type: "notes",
    },
    {
      title: "Apuntes Pro - Material Exclusivo",
      url: "/apuntespro",
      displayUrl: "www.apuntespro.com › inicio",
      description: "Apuntes exclusivos y de alta calidad para estudiantes.",
      type: "notes",
    },
  ],
  PENAS: [
    {
      title:
        'Art. 200: "Será reprimido con reclusión o prisión de tres a diez años',
      content:
        'el que envenenare o adulterare, de un modo peligroso para la salud, aguas potables o sustancias alimenticias o medicinales, destinadas al uso público o al consumo de una colectividad de personas".',
      source: "Revista Pensamiento Penal",
      url: "https://www.pensamientopenal.com.ar/cpc38027",
      questions: [
        "¿Cuántos años de cárcel dan por envenenamiento?",
        "¿Qué dice el artículo 247 del Código Penal Argentino?",
        "¿Qué es el envenenamiento en derecho penal?",
      ],
    },
  ],
  MATRICULA: [
    {
      title: "Matricula de fumigador",
      url: "https://www.ccf.com/ar",
      displayUrl: "www.ccf.com.ar › inicio",
      description:
        "Matricula de fumigador, requisitos y trámites para obtener la habilitación...",
      type: "general",
    },
    {
      title: "Camara argentina de fumigadores",
      url: "https://www.ccf.com/ar",
      displayUrl: "www.ccf.com.ar › inicio",
      description:
        "Cámara argentina de fumigadores, noticias y eventos del sector...",
      type: "general",
    },
    {
      title: "Curso de Capacitación en Control de Plagas",
      url: "https://www.ccf.com/ar/cursos",
      displayUrl: "www.ccf.com.ar › cursos",
      description:
        "Formación profesional en control de plagas urbanas. Próximas fechas disponibles, modalidad presencial y virtual...",
      type: "general",
    },
    {
      title: "Registro Nacional de Empresas Fumigadoras",
      url: "https://www.ccf.com/ar/registro",
      displayUrl: "www.ccf.com.ar › registro",
      description:
        "Consulta el listado oficial de empresas fumigadoras habilitadas en Argentina. Verificá credenciales y permisos...",
      type: "general",
    },
    {
      title: "Normativa vigente para fumigadores | CCF",
      url: "https://www.ccf.com/ar/normativa",
      displayUrl: "www.ccf.com.ar › normativa",
      description:
        "Marco legal actualizado para la actividad de control de plagas. Leyes, decretos y disposiciones vigentes...",
      type: "general",
    },
    {
      title: "Renovación de Matrícula - Fumigadores",
      url: "https://www.ccf.com/ar/renovacion",
      displayUrl: "www.ccf.com.ar › renovacion",
      description:
        "Proceso de renovación de matrícula profesional. Documentación necesaria, aranceles y plazos...",
      type: "general",
    },
    {
      title: "Productos autorizados para fumigación",
      url: "https://www.ccf.com/ar/productos",
      displayUrl: "www.ccf.com.ar › productos",
      description:
        "Lista actualizada de productos aprobados para control de plagas. Fichas técnicas y recomendaciones de uso...",
      type: "general",
    },
    {
      title: "Calendario de Capacitaciones 2024",
      url: "https://www.ccf.com/ar/calendario",
      displayUrl: "www.ccf.com.ar › calendario",
      description:
        "Agenda de cursos, talleres y certificaciones para profesionales del control de plagas...",
      type: "general",
    },
    {
      title: "Directorio de Proveedores Certificados",
      url: "https://www.ccf.com/ar/proveedores",
      displayUrl: "www.ccf.com.ar › proveedores",
      description:
        "Encuentra proveedores autorizados de equipos y productos para fumigación. Listado verificado...",
      type: "general",
    },
    {
      title: "Protocolos de Seguridad en Fumigación",
      url: "https://www.ccf.com/ar/protocolos",
      displayUrl: "www.ccf.com.ar › protocolos",
      description:
        "Guías y procedimientos de seguridad para trabajos de fumigación. Medidas preventivas y EPP...",
      type: "general",
    },
    {
      title: "Asociarse a la Cámara de Fumigadores",
      url: "https://www.ccf.com/ar/asociarse",
      displayUrl: "www.ccf.com.ar › asociarse",
      description:
        "Beneficios y requisitos para asociarse a la CCF. Servicios exclusivos para miembros...",
      type: "general",
    },
    {
      title: "Control de Plagas en Industria Alimenticia",
      url: "https://www.ccf.com/ar/industria-alimenticia",
      displayUrl: "www.ccf.com.ar › industria-alimenticia",
      description:
        "Especializaciones y certificaciones para control de plagas en industria alimentaria. Normativas específicas...",
      type: "general",
    },
    {
      title: "Certificación MIP - Manejo Integrado de Plagas",
      url: "https://www.ccf.com/ar/certificacion-mip",
      displayUrl: "www.ccf.com.ar › certificacion-mip",
      description:
        "Programa de certificación profesional en Manejo Integrado de Plagas. Modalidad y contenidos...",
      type: "general",
    },
    {
      title: "Eventos y Congresos 2024 | CCF",
      url: "https://www.ccf.com/ar/eventos",
      displayUrl: "www.ccf.com.ar › eventos",
      description:
        "Calendario de eventos, congresos y exposiciones del sector. Networking y actualización profesional...",
      type: "general",
    },
    {
      title: "Biblioteca Técnica para Fumigadores",
      url: "https://www.ccf.com/ar/biblioteca",
      displayUrl: "www.ccf.com.ar › biblioteca",
      description:
        "Recursos técnicos, manuales y publicaciones especializadas en control de plagas...",
      type: "general",
    },
    {
      title: "Seguros Profesionales para Fumigadores",
      url: "https://www.ccf.com/ar/seguros",
      displayUrl: "www.ccf.com.ar › seguros",
      description:
        "Coberturas y planes de seguros específicos para la actividad. Requisitos y cotizaciones...",
      type: "general",
    },
    {
      title: "Denuncias y Reclamos | CCF",
      url: "https://www.ccf.com/ar/denuncias",
      displayUrl: "www.ccf.com.ar › denuncias",
      description:
        "Canal oficial para denuncias sobre servicios de fumigación irregular. Procedimiento y seguimiento...",
      type: "general",
    },
    {
      title: "Bolsa de Trabajo - Sector Fumigación",
      url: "https://www.ccf.com/ar/empleos",
      displayUrl: "www.ccf.com.ar › empleos",
      description:
        "Ofertas laborales en el sector de control de plagas. Búsquedas activas y perfiles solicitados...",
      type: "general",
    },
    {
      title: "Novedades y Noticias del Sector",
      url: "https://www.ccf.com.ar/noticias",
      displayUrl: "www.ccf.com.ar › noticias",
      description:
        "Últimas actualizaciones del sector de control de plagas. Novedades regulatorias y tecnológicas...",
      type: "general",
    },
    {
      title: "Asesoramiento Legal para Fumigadores",
      url: "https://www.ccf.com.ar/legal",
      displayUrl: "www.ccf.com.ar › legal",
      description:
        "Servicio de consultoría legal especializada en el sector. Asesoramiento en normativas y habilitaciones...",
      type: "general",
    },
    {
      title: "Equipamiento Profesional de Fumigación",
      url: "https://www.ccf.com.ar/equipos",
      displayUrl: "www.ccf.com.ar › equipos",
      description:
        "Guía de equipos y herramientas profesionales. Especificaciones técnicas y proveedores autorizados...",
      type: "general",
    },
    {
      title: "Certificación Ambiental para Fumigadores",
      url: "https://www.ccf.com.ar/ambiental",
      displayUrl: "www.ccf.com.ar › ambiental",
      description:
        "Programa de certificación en gestión ambiental para empresas fumigadoras. Estándares y auditorías...",
      type: "general",
    },
    {
      title: "Control de Plagas en Espacios Públicos",
      url: "https://www.ccf.com.ar/espacios-publicos",
      displayUrl: "www.ccf.com.ar › espacios-publicos",
      description:
        "Protocolos y requisitos para fumigación en áreas públicas. Permisos y coordinación con autoridades...",
      type: "general",
    },
    {
      title: "Foro Profesional de Fumigadores",
      url: "https://www.ccf.com.ar/foro",
      displayUrl: "www.ccf.com.ar › foro",
      description:
        "Espacio de intercambio entre profesionales del sector. Consultas técnicas y experiencias...",
      type: "general",
    },
    {
      title: "Manual de Buenas Prácticas en Fumigación",
      url: "https://www.ccf.com.ar/manual",
      displayUrl: "www.ccf.com.ar › manual",
      description:
        "Guía completa de procedimientos y estándares para el control profesional de plagas...",
      type: "general",
    },
    {
      title: "Calendario de Inspecciones 2024",
      url: "https://www.ccf.com.ar/inspecciones",
      displayUrl: "www.ccf.com.ar › inspecciones",
      description:
        "Cronograma de inspecciones y auditorías para empresas fumigadoras. Preparación y requisitos...",
      type: "general",
    },
    {
      title: "Servicios Especiales de Fumigación",
      url: "https://www.ccf.com.ar/servicios-especiales",
      displayUrl: "www.ccf.com.ar › servicios-especiales",
      description:
        "Información sobre servicios específicos: tratamientos térmicos, fumigación de contenedores, control aviar...",
      type: "general",
    },
    {
      title: "Gestión de Residuos en Fumigación",
      url: "https://www.ccf.com.ar/residuos",
      displayUrl: "www.ccf.com.ar › residuos",
      description:
        "Protocolos para el manejo responsable de residuos de fumigación. Normativa ambiental vigente...",
      type: "general",
    },
    {
      title: "Programa de Mentoría para Fumigadores",
      url: "https://www.ccf.com.ar/mentoria",
      displayUrl: "www.ccf.com.ar › mentoria",
      description:
        "Sistema de acompañamiento para nuevos profesionales del sector. Tutorías y desarrollo profesional...",
      type: "general",
    },
    {
      title: "Certificación en Control de Plagas Urbanas",
      url: "https://www.ccf.com.ar/certificacion-urbana",
      displayUrl: "www.ccf.com.ar › certificacion-urbana",
      description:
        "Programa especializado en control de plagas en entornos urbanos. Metodologías y prácticas...",
      type: "general",
    },
  ],
};
