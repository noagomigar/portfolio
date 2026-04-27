const translations = {
    es: {
        // --- NAVEGACIÓN ---
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.exp": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.events": "Eventos",

        // --- INDEX: HERO ---
        "hero.greeting": "Hola, soy",
        "hero.role": "Desarrolladora de Aplicaciones Multiplataforma & Técnica en Sistemas",
        "hero.desc": "Apasionada por la informática, con un interés creciente en el ámbito de la bioinformática y la seguridad informática. Me motiva comprender y aplicar la tecnología al análisis de datos en entornos científicos, contribuyendo a soluciones seguras y eficientes desde una perspectiva técnica y analítica.",

        // --- INDEX: CV ---
        "cv.download": "Descargar CV:",
        "cv.es": "🇪🇸 Español",
        "cv.ca": "🇦🇩 Català",
        "cv.en": "🇬🇧 English",

        // --- INDEX: HIGHLIGHTS ---
        "highlight.lang_title": "Nivel de Inglés",
        "highlight.lang_level": "Alto dominio",
        "highlight.it_title": "IT & SysAdmin",
        "highlight.it_desc": "Especialista en infraestructuras",

        // --- SOBRE MÍ ---
        "about.title": "Conóceme",
        "about.female_tech": "Como mujer apasionada por la informática en un sector tradicionalmente dominado por hombres, estoy firmemente decidida a romper barreras y convertirme en un referente femenino. Me interesa especialmente orientar mi trayectoria hacia la bioinformática, combinando el análisis de datos en entornos científicos con buenas prácticas de ciberseguridad y protección de la información. Mi curiosidad técnica me impulsa a seguir aprendiendo y evolucionando constantemente.",
        "about.education": "Educación",
        "about.edu1_title": "CFGS Desarrollo de Aplicaciones Multiplataforma",
        "about.edu1_school": "Institut Torre de Malla",
        "about.edu2_title": "CFGM Sistemas Microinformáticos y Redes",
        "about.edu2_school": "INS Torre de Malla",
        "about.soft_title": "Habilidades Blandas",
        "about.skill_leadership": "Liderazgo",
        "about.skill_communication": "Comunicación Asertiva",
        "about.skill_problem": "Resolución de Problemas",
        "about.skill_autonomy": "Autonomía",
        "about.skill_teamwork": "Trabajo en Equipo",
        "about.skill_responsibility": "Responsabilidad",
        "about.tech_title": "Conocimientos Técnicos",
        "about.tech_prog_title": "Programación",
        "about.tech_prog_desc": "Multiplataforma, Web y Móvil",
        "about.tech_db_title": "Bases de Datos",
        "about.tech_db_desc": "Diseño y administración (Relacionales y No Relacionales)",
        "about.tech_sys_title": "Sistemas y Redes",
        "about.tech_sys_desc": "Linux, Windows, Configuración LAN, Seguridad y Mantenimiento de equipos",
        "about.tech_methods_title": "Metodologías",
        "about.tech_methods_desc": "Scrum, Sprints, Trello",

        // --- EXPERIENCIA ---
        "exp.title": "Experiencia Profesional",
        "exp1.title": "Soporte IT e Infraestructuras (Programa Erasmus+)",
        "exp1.location": "República Checa",
        "exp1.badge": "Internacional",
        "exp1.desc": "Inmersión en un entorno profesional multicultural utilizando el <strong>Inglés como lengua principal</strong> de comunicación técnica y de equipo.",
        "exp1.li1": "Integración rápida y adaptación a metodologías de trabajo europeas.",
        "exp1.li2": "Verificación de sistemas y asistencia técnica para garantizar un correcto funcionamiento.",
        "exp1.li3": "Demostración de alta autonomía en la resolución de problemas en un entorno internacional.",

        "exp2.title": "Técnica de Sistemas y Redes (Prácticas)",
        "exp2.location": "Institut Torre de Malla",
        "exp2.badge": "Alto Nivel de Responsabilidad",
        "exp2.highlight": "<em>Nota destacada:</em> Dada la confianza del centro en mis capacidades técnicas, <strong>se me otorgó acceso administrativo a la red del instituto</strong> siendo aún alumna, gestionando servicios críticos y asumiendo responsabilidades de nivel profesional.",
        "exp2.task1_title": "Supervisión de Red",
        "exp2.task1_desc": "Monitoreo para minimizar interrupciones y garantizar la estabilidad del servicio a usuarios.",
        "exp2.task2_title": "Mantenimiento",
        "exp2.task2_desc": "Resolución de incidencias, gestión de copias de seguridad e instalación de sistemas operativos.",
        "exp2.task3_title": "Documentación",
        "exp2.task3_desc": "Creación de documentación técnica detallada para reducir consultas y mejorar la autonomía de los usuarios.",

        // --- PROYECTOS ---
        "projects.title": "Mis Proyectos",
        "projects.subtitle": "De una app fintech con React a un e-commerce fullstack con Node.js — proyectos reales donde el diseño, la lógica y el código se combinan para construir algo que funciona de verdad.",
        "imaginem.title": "IMAGINEM - Fintech Concept",
        "imaginem.desc": "Aplicación financiera diseñada para la Gen Z que fusiona banca, IA y conciencia ecológica. Incluye modo dual (Life/Bank), asistente inteligente y gestión de identidad fantasma.",
        "imaginem.tag_fintech": "Fintech",
        "imaginem.btn_repo": "Ver Código",
        "imaginem.btn_live": "Ver Sitio",

        "hybrid_sound.title": "The Hybrid Sound",
        "hybrid_sound.desc": "Portal de música alternativa con diseño 'dark mode'. Incluye maquetación avanzada con Flexbox y Grid, animaciones personalizadas y una arquitectura de CSS modular.",
        "hybrid_sound.btn_repo": "Ver Código",
        "hybrid_sound.btn_live": "Ver Sitio",

        "teelab.title": "Teelab - E-commerce Fullstack",
        "teelab.desc": "Plataforma de venta de camisetas con filtrado dinámico de productos, sistema de carrito de compra y generación de tickets de pedido. Conectado a un backend en Render.",
        "teelab.tag_fullstack": "Fullstack",
        "teelab.btn_repo": "Ver Código",
        "teelab.btn_live": "Ver Sitio",

        "tetris.title": "Tetris en Kotlin",
        "tetris.desc": "Juego de Tetris funcional para consola desarrollado en Kotlin con arquitectura orientada a objetos. Incluye piezas con color ANSI, caída de piezas, eliminación de filas y una batería de tests unitarios con JUnit 5 que cubre las operaciones principales del tablero.",
        "tetris.tag": "Consola",
        "tetris.btn_repo": "Ver Código",

        "trivial.title": "Trivial - Quiz App Android",
        "trivial.desc": "Juego de preguntas y respuestas para Android con 6 categorías, 3 niveles de dificultad, temporizador animado y logo Lottie. Arquitectura MVVM con navegación type-safe y StateFlow.",
        "trivial.tag": "Android",
        "trivial.btn_repo": "Ver Código",
        "trivial.btn_apk": "Descargar APK",

        "arteum.title": "Arteum - Art Explorer Android",
        "arteum.desc": "App Android para explorar la colección del Art Institute of Chicago. Búsqueda en tiempo real, favoritos con Room, modo oscuro y alternancia entre vista lista y cuadrícula.",
        "arteum.tag": "Android",

        // --- EVENTOS ---
        "events.title": "Eventos & Publicaciones",
        "events.subtitle": "Un diario de experiencias, reflexiones y momentos que han marcado mi trayectoria profesional.",
        "erasmus.title": "Mi Erasmus en Sedlčany",
        "erasmus.date": "Estancia Erasmus",
        "erasmus.p1": "Durante mi estancia Erasmus en Sedlčany, en el Gymnázium a Střední odborná škola ekonomická, viví un período que moldeó profundamente mi forma de enfocar el aprendizaje y el trabajo. Pasé un mes en un entorno que me sacó de mi zona de confort y me permitió crecer tanto personal como profesionalmente.",
        "erasmus.p2": "Durante las prácticas, trabajé con Unity, desarrollando un juego de laberintos y otro proyecto de pixel-art inspirado en mi experiencia. Aunque ninguno se completó, el proceso me ayudó a aprender, experimentar y mejorar mis habilidades de desarrollo. También tuve la oportunidad de dar clases de español, lo que hizo que el intercambio cultural fuera aún más significativo y agradable.",
        "erasmus.p3": "Miro hacia atrás a esta etapa con gran aprecio por todo lo que me ofreció. Incluso ahora, a menudo pienso en esa experiencia. Es una de esas que realmente dejan una huella duradera.",
        "eventos.btn_linkedin": "Ver post original",

        "hackathon.title": "24h Innovació: El nacimiento de Imaginem",
        "hackathon.date": "Hackathon 24H",
        "hackathon.p1": "Durante el hashtag #24hinnovacio, viví uno de los desafíos más intensos y memorables de mis estudios hasta ahora. Fueron 24 horas seguidas en el instituto, trabajando codo a codo con mi equipo, construyendo ideas, resolviendo problemas, luchando contra el reloj y empujándonos mucho más allá de lo que creíamos capaz. Agotador, caótico y honestamente inolvidable.",
        "hackathon.p2": "Nuestro reto vino de imagin: diseñar la versión futura de su app. Y de esa larga noche de insomnio nació Imaginem, un concepto fintech completo creado en un solo día.",
        "hackathon.p3": "No solo diseñamos funcionalidades; creamos una visión de lo que podría ser la banca para la Gen Z:",
        "hackathon.li1": "transformando dinero en el tiempo que cuesta ganarlo; una nueva forma de crear conciencia financiera.",
        "hackathon.li2": "un asistente integrado capaz de interpretar la intención del usuario y actuar en consecuencia.",
        "hackathon.li3": "tarjetas de un solo uso y un buzón seguro para compras online.",
        "hackathon.li4": "gestión de divisas en tiempo real sin comisiones más un sistema de presupuesto de viaje con IA.",
        "hackathon.li5": "un mapa de eco-recompensas promoviendo negocios locales sostenibles.",
        "hackathon.li6": "un sistema donde los ingresos se organizan automáticamente en ahorros, necesidades y estilo de vida.",
        "hackathon.p4": "Pero más allá del proyecto en sí, lo que realmente me marcó fue la experiencia. Horas de trabajo en equipo, decisiones técnicas bajo presión, creatividad espontánea, momentos de frustración y esa energía que surge cuando un grupo trabaja hacia un mismo objetivo.",
        "hackathon.p5": "No fue solo una competición; fue la prueba de lo que podemos construir cuando colaboramos, confiamos los unos en los otros y seguimos adelante incluso cuando estamos cansados.",
        "hackathon.p6": "Estoy genuinamente orgullosa de lo que creamos juntos, y de todo lo que aprendí durante esas 24 horas. Imaginem es un recordatorio de lo que pueden lograr la pasión, el trabajo en equipo y la resiliencia.",
        "hackathon.btn_project": "Ver Proyecto Imaginem",

        "womensday.title": "Día Internacional de la Mujer en IT",
        "womensday.date": "8M - Reflexión",
        "womensday.p1": "Por el Día Internacional de la Mujer, quería compartir un poco sobre lo que significa ser mujer en IT, un campo en el que todavía sentimos la presión de tener que demostrarnos a nosotras mismas el doble, de ser 'lo suficientemente buenas', de justificar cada paso que damos. Es un espacio que amo, pero también es uno donde notas constantemente lo diferente que puede ser la experiencia dependiendo de tu género.",
        "womensday.quote": "Una de las mujeres que más me inspira es Hedy Lamarr. En una época en la que la sociedad solo quería que las mujeres fueran hermosas y silenciosas, ella se negó a ser definida por eso. Junto a George Antheil, creó el sistema de salto de frecuencia que más tarde se volvió esencial para el Wi-Fi, Bluetooth y GPS, tecnología que todos usamos a diario. El hecho de que una actriz, admirada por su apariencia, también revolucionara la comunicación moderna es un poderoso recordatorio de que la brillantez no tiene género ni una forma predeterminada.",
        "womensday.p2": "Su historia es importante para mí porque es la prueba de que la sociedad puede subestimar a las mujeres, pero no puede decidir de lo que somos capaces.",
        "womensday.p3": "Y aunque hoy sea 8M, quiero ser clara: el feminismo y la lucha por el reconocimiento en tech no ocurren solo una vez al año. Son parte de nuestra realidad cotidiana: en cada clase, cada proyecto, cada reunión donde sentimos el peso de las expectativas, las dudas, los estereotipos. Ser mujer en IT significa abrirse paso a través de eso, presentarse de todos modos y reclamar el espacio que siempre debió ser nuestro.",
        "womensday.btn_ig": "Ver post en Instagram",

        "mwc.title": "Talent Arena & MWC: El futuro del Digital Health",
        "mwc.date": "Congreso Tecnológico",
        "mwc.p1": "Hace unas semanas, tuve la oportunidad de participar en el #TalentArena y el #MobileWorldCongress, dos eventos que me recordaron por qué espacios como estos importan tanto para cualquiera que esté construyendo un futuro en la tecnología.",
        "mwc.p2": "Pasé el martes y el miércoles en el Talent Arena, asistiendo a varias charlas inspiradoras. Una de ellas fue dirigida por Albert Sampietro Ventosa, quien habló sobre ciberseguridad y enfatizó algo esencial: la seguridad es una responsabilidad compartida por todos en una organización, no solo por los equipos técnicos.",
        "mwc.p3": "Otra sesión que realmente resonó conmigo fue la del Dr. Alexander Holbach y Jared Worful, centrada en cómo la IA puede acelerar el desarrollo farmacéutico, mejorar el análisis de datos y transformar la forma en que abordamos la innovación en salud. Como alguien que quiere trabajar en la intersección de la atención médica y la tecnología, esta perspectiva se sintió especialmente alineada con mis objetivos.",
        "mwc.p4": "Después de las charlas, pasé tiempo hablando con diferentes empresas, haciendo preguntas y aprendiendo cómo aplican la tecnología en entornos reales. Fue alentador ver cuántas de ellas están explorando soluciones conectadas con la salud, los datos y la innovación centrada en el usuario, áreas en las que estoy profundamente interesada.",
        "mwc.p5": "Más tarde esa semana, visité el #MobileWorldCapitalBarcelona, donde pude ver cómo los principales actores tecnológicos están dando forma al futuro de los servicios digitales. En lugar de solo leer sobre innovación, pude experimentarla directamente, y me dio una visión mucho más clara de hacia dónde se dirige la industria.",
        "mwc.p6": "En general, esta experiencia reforzó mi motivación para seguir creciendo en salud digital y continuar construyendo el camino que me impulsa: combinar la informática con un impacto significativo en el sector de la salud.",

        "summit.title": "Digital Summit: Conectando con el sector tech",
        "summit.date": "Networking & Talento",
        "summit.p1": "Hace unas semanas participé en el #DigitalSummit, una actividad en la que participamos todos los estudiantes de primer año.",
        "summit.p2": "Honestamente, resultó ser mucho más valioso de lo que esperaba.",
        "summit.p3": "El evento se dividió en dos partes. En la primera, varias empresas presentaron quiénes son, qué hacen y el tipo de talento que buscan. Fue una gran oportunidad para entender qué espera la industria tecnológica actual de los nuevos profesionales y cómo podemos empezar a prepararnos desde el primer día.",
        "summit.p4": "En la segunda parte, tuvimos la oportunidad de conocer a estas empresas directamente a través de rondas rápidas de entrevistas. Fue intenso y dinámico. Hablar cara a cara con reclutadores y profesionales hizo que todo se sintiera mucho más real, no solo teoría.",
        "summit.p5": "El Digital Summit fue una experiencia significativa que me ayudó a entender mejor el mercado laboral, descubrir nuevas oportunidades y reflexionar sobre el tipo de profesional en el que me quiero convertir.",

        "shimmy.title": "Shimmy BCN: Donde la tecnología y el arte se encuentran",
        "shimmy.date": "Emprendimiento & Creatividad",
        "shimmy.p1": "Ayer asistí a un evento pop-up de networking organizado por Shimmy BCN, y resultó ser una de las experiencias más inspiradoras que he tenido últimamente.",
        "shimmy.p2": "El evento reunió a jóvenes emprendedores de todo el mundo que mostraron sus proyectos, en su mayoría ropa hecha a mano, pero también pinturas, artistas del tatuaje e incluso un espacio de micrófono abierto. Ver a tantos artistas emergentes construyendo sus propias marcas, creando desde cero y asumiendo el riesgo de mostrar su trabajo fue genuinamente motivador.",
        "shimmy.p3": "La creatividad, la resolución de problemas y el coraje para innovar son valores que compartimos en todos los campos. Su capacidad para convertir ideas en productos reales me recordó mucho a lo que hacemos en tecnología: empezar poco a poco, iterar, aprender y construir algo que refleje quiénes somos.",
        "shimmy.p4": "Presenciar su pasión me hizo reflexionar sobre lo importante que es mantener la curiosidad, explorar fuera de nuestra propia industria y aprender de personas que crean de formas completamente diferentes. Para mí, la inspiración no siempre viene del código, viene del arte, de asumir riesgos y de personas dispuestas a apostar por sí mismas y ser diferentes.",
        "shimmy.p5": "Salí del evento con mucha admiración y una motivación renovada para seguir creciendo, tanto personal como profesionalmente.",
        "shimmy.btn_ig": "Perfil de Shimmy BCN",
    },

    en: {
        // --- NAVIGATION ---
        "nav.home": "Home",
        "nav.about": "About",
        "nav.exp": "Experience",
        "nav.projects": "Projects",
        "nav.events": "Events",

        // --- INDEX: HERO ---
        "hero.greeting": "Hi, I'm",
        "hero.role": "Cross-platform App Developer & Systems Technician",
        "hero.desc": "Passionate about computer science, with a growing interest in the field of bioinformatics. I am motivated to understand and apply technology to data analysis in scientific environments, contributing to secure and efficient solutions from a technical and analytical perspective.",

        // --- INDEX: CV ---
        "cv.download": "Download Resume:",
        "cv.es": "🇪🇸 Spanish",
        "cv.ca": "🇦🇩 Catalan",
        "cv.en": "🇬🇧 English",

        // --- INDEX: HIGHLIGHTS ---
        "highlight.lang_title": "English Level",
        "highlight.lang_level": "High Proficiency",
        "highlight.it_title": "IT & SysAdmin",
        "highlight.it_desc": "Infrastructure Specialist",

        // --- ABOUT ME ---
        "about.title": "About Me",
        "about.female_tech": "As a woman passionate about computer science in a traditionally male-dominated field, I am firmly determined to break barriers and become a female role model. I am particularly interested in guiding my career towards bioinformatics, combining data analysis in scientific environments with good cybersecurity practices and information protection. My technical curiosity drives me to keep learning and continuously evolving.",
        "about.education": "Education",
        "about.edu1_title": "Higher Degree in Cross-platform Application Development",
        "about.edu1_school": "Institut Torre de Malla",
        "about.edu2_title": "Intermediate Degree in Microcomputer Systems and Networks",
        "about.edu2_school": "INS Torre de Malla",
        "about.soft_title": "Soft Skills",
        "about.skill_leadership": "Leadership",
        "about.skill_communication": "Assertive Communication",
        "about.skill_problem": "Problem Solving",
        "about.skill_autonomy": "Autonomy",
        "about.skill_teamwork": "Teamwork",
        "about.skill_responsibility": "Responsibility",
        "about.tech_title": "Technical Skills",
        "about.tech_prog_title": "Programming",
        "about.tech_prog_desc": "Cross-platform, Web and Mobile",
        "about.tech_db_title": "Databases",
        "about.tech_db_desc": "Design and administration (Relational and Non-Relational)",
        "about.tech_sys_title": "Systems & Networks",
        "about.tech_sys_desc": "Linux, Windows, LAN Configuration, Security and Equipment Maintenance",
        "about.tech_methods_title": "Methodologies",
        "about.tech_methods_desc": "Scrum, Sprints, Trello",

        // --- EXPERIENCIE ---
        "exp.title": "Professional Experience",
        "exp1.title": "IT Support & Infrastructure (Erasmus+ Programme)",
        "exp1.location": "Czech Republic",
        "exp1.badge": "International",
        "exp1.desc": "Immersion in a multicultural professional environment using <strong>English as the main language</strong> for technical and team communication.",
        "exp1.li1": "Fast integration and adaptation to European working methodologies.",
        "exp1.li2": "Systems verification and technical assistance to ensure correct operation.",
        "exp1.li3": "Demonstrated high autonomy in problem-solving within an international environment.",

        "exp2.title": "Systems & Networks Technician (Internship)",
        "exp2.location": "Institut Torre de Malla",
        "exp2.badge": "High Level of Responsibility",
        "exp2.highlight": "<em>Notable highlight:</em> Given the school's trust in my technical skills, <strong>I was granted administrative access to the institute's network</strong> while still a student, managing critical services and taking on professional-level responsibilities.",
        "exp2.task1_title": "Network Supervision",
        "exp2.task1_desc": "Monitoring to minimise disruptions and ensure service stability for users.",
        "exp2.task2_title": "Maintenance",
        "exp2.task2_desc": "Incident resolution, backup management and operating system installation.",
        "exp2.task3_title": "Documentation",
        "exp2.task3_desc": "Creation of detailed technical documentation to reduce queries and improve user autonomy.",

        // --- PROYECTS ---
        "projects.title": "My Projects",
        "projects.subtitle": "From a fintech app built with React to a fullstack e-commerce with Node.js — real projects where design, logic and code come together to build something that actually works.",
        "imaginem.title": "IMAGINEM - Fintech Concept",
        "imaginem.desc": "Revolutionary fintech app concept for Gen Z merging banking, AI, and eco-consciousness. Features dual modes (Life/Bank), smart assistant, and Ghost Identity management.",
        "imaginem.tag_fintech": "Fintech",
        "imaginem.btn_repo": "View Code",
        "imaginem.btn_live": "Live Demo",

        "hybrid_sound.title": "The Hybrid Sound",
        "hybrid_sound.desc": "Alternative music portal with a premium design. Features advanced layout using Flexbox and Grid, custom animations, and a modular CSS architecture.",
        "hybrid_sound.btn_repo": "View Code",
        "hybrid_sound.btn_live": "Live Demo",

        "teelab.title": "Teelab - Fullstack E-commerce",
        "teelab.desc": "T-shirt store platform featuring dynamic product filtering, a shopping cart system, and order ticket generation. Integrated with a custom backend hosted on Render.",
        "teelab.tag_fullstack": "Fullstack",
        "teelab.btn_repo": "View Code",
        "teelab.btn_live": "Live Demo",

        "tetris.title": "Tetris in Kotlin",
        "tetris.desc": "Fully functional console Tetris game built in Kotlin with object-oriented architecture. Features ANSI colour rendering, piece dropping, row clearing, and a JUnit 5 unit test suite covering all core board operations.",
        "tetris.tag": "Console",
        "tetris.btn_repo": "View Code",

        "trivial.title": "Trivial - Quiz App Android",
        "trivial.desc": "Android quiz game with 6 categories, 3 difficulty levels, animated timer and Lottie logo. MVVM architecture with type-safe navigation and StateFlow.",
        "trivial.tag": "Android",
        "trivial.btn_repo": "View Code",
        "trivial.btn_apk": "Download APK",

        "arteum.title": "Arteum - Art Explorer Android",
        "arteum.desc": "Android app to explore the Art Institute of Chicago collection. Real-time search, full detail view, Room favourites, dark mode and list/grid toggle.",
        "arteum.tag": "Android",

        // --- EVENTS ---
        "events.title": "Events & Publications",
        "events.subtitle": "A diary of experiences, reflections and moments that have shaped my professional journey.",
        "erasmus.title": "My Erasmus stay in Sedlčany",
        "erasmus.date": "Erasmus Stay",
        "erasmus.p1": "During my Erasmus stay in Sedlčany, at the Gymnázium a Střední odborná škola ekonomická, I experienced a period that deeply shaped the way I approach learning and work. I spent one month in an environment that pushed me out of my comfort zone and allowed me to grow both personally and professionally.",
        "erasmus.p2": "During the internship, I worked with Unity, developing a maze game and another pixel-art project inspired by my Erasmus experience. Even though neither project was completed, the process helped me learn, experiment, and improve my development skills. I also had the opportunity to teach Spanish, which made the cultural exchange even more meaningful and enjoyable.",
        "erasmus.p3": "I look back on this stage with great appreciation for everything it offered me. Even now, I often think about that experience. It’s one of those that truly leaves a lasting mark.",
        "eventos.btn_linkedin": "View original post",

        "hackathon.title": "24h Innovació: The birth of Imaginem",
        "hackathon.date": "24H Hackathon",
        "hackathon.p1": "During the hashtag #24hinnovacio, I experienced one of the most intense and memorable challenges of my studies so far. It was 24h straight at the institute, working side-by-side with my team, building ideas, solving problems, fighting the clock, and pushing ourselves far beyond what we thought we could do. Exhausting, chaotic, and honestly unforgettable.",
        "hackathon.p2": "Our challenge came from imagin: designing the future version of their app. And from that long, sleepless night, Imaginem was born, a complete fintech concept created in just one day.",
        "hackathon.p3": "We didn’t just design features; we created a vision of what banking could become for Gen Z:",
        "hackathon.li1": "transforming money into the time it takes to earn it; a new way to build financial awareness.",
        "hackathon.li2": "an integrated assistant capable of interpreting user intent and acting on it.",
        "hackathon.li3": "one-time cards and a Safe Mailbox for secure online shopping.",
        "hackathon.li4": "zero-fee real-time currency management plus an AI-powered travel budget system.",
        "hackathon.li5": "an eco-rewards map promoting sustainable, local businesses.",
        "hackathon.li6": "a system where income organizes itself automatically into savings, needs and lifestyle.",
        "hackathon.p4": "But beyond the project itself, what truly marked me was the experience. Hours of teamwork, technical decisions under pressure, spontaneous creativity, moments of frustration and that energy that happens when a group works toward the same goal.",
        "hackathon.p5": "It wasn’t just a competition; it was proof of what we can build when we collaborate, trust each other and keep going even when we’re tired.",
        "hackathon.p6": "I’m genuinely proud of what we created together, and of everything I learned during those 24 hours. Imaginem it’s a reminder of what passion, teamwork and resilience can do.",
        "hackathon.btn_project": "View Imaginem Project",

        "womensday.title": "International Women's Day in IT",
        "womensday.date": "8M - Reflection",
        "womensday.p1": "For International Women’s Day, I wanted to share a bit about what it means to be a woman in IT, a field where we still feel the pressure to prove ourselves twice as much, to be 'good enough,' to justify every step we take. It’s a space I love, but it’s also one where you constantly notice how different the experience can be depending on your gender.",
        "womensday.quote": "One of the women who inspires me the most is Hedy Lamarr. At a time when society only wanted women to be beautiful and silent, she refused to be defined by that. Together with George Antheil, she created the frequency-hopping system that later became essential for Wi-Fi, Bluetooth and GPS, technology we all use daily. The fact that an actress, admired for her looks, also revolutionized modern communication is a powerful reminder that brilliance has no gender and no predetermined shape.",
        "womensday.p2": "Her story matters to me because it’s proof that society can underestimate women, but it cannot decide what we’re capable of.",
        "womensday.p3": "And although today is 8M, I want to be clear: feminism and the fight for recognition in tech don’t happen only once a year. They are part of our everyday reality: in every class, every project, every meeting where we feel the weight of expectations, the doubts, the stereotypes. Being a woman in IT means pushing through that, showing up anyway, and claiming the space that should have always been ours.",
        "womensday.btn_ig": "View post on Instagram",

        "mwc.title": "Talent Arena & MWC: The Future of Digital Health",
        "mwc.date": "Tech Congress",
        "mwc.p1": "A few weeks ago, I had the chance to participate in the #TalentArena and the #MobileWorldCongress, two events that reminded me why spaces like these matter so much for anyone building a future in tech.",
        "mwc.p2": "I spent Tuesday and Wednesday at the Talent Arena, attending several inspiring talks. One of them was led by Albert Sampietro Ventosa who spoke about cybersecurity and emphasized something essential: security is a responsibility shared by everyone in an organization, not just technical teams.",
        "mwc.p3": "Another session that truly resonated with me was the one by Dr. Alexander Holbach and Jared Worful, focused on how AI can accelerate pharmaceutical development, enhance data analysis, and transform the way we approach health innovation. As someone who wants to work at the intersection of healthcare and technology, this perspective felt especially aligned with my goals.",
        "mwc.p4": "After the talks, I spent time speaking with different companies, asking questions, and learning how they apply technology in real environments. It was encouraging to see how many of them are exploring solutions connected to health, data, and user-centered innovation, areas I’m deeply interested in.",
        "mwc.p5": "Later that week, I visited the #MobileWorldCapitalBarcelona, where I could see how major tech players are shaping the future of digital services. Instead of just reading about innovation, I was able to experience it directly, and it gave me a much clearer sense of where the industry is heading.",
        "mwc.p6": "Overall, this experience reinforced my motivation to keep growing in digital health and to continue building the path that drives me: combining IT with meaningful impact in the healthcare sector.",

        "summit.title": "Digital Summit: Connecting with the tech industry",
        "summit.date": "Networking & Talent",
        "summit.p1": "A few weeks ago I took part in the #DigitalSummit, an activity that all first-year students participate in.",
        "summit.p2": "Honestly, it turned out to be much more valuable than I expected.",
        "summit.p3": "The event was divided into two parts. In the first part, several companies presented who they are, what they do, and the kind of talent they’re looking for. It was a great opportunity to understand what today’s tech industry expects from new professionals and how we can start preparing ourselves for it from day one.",
        "summit.p4": "In the second part, we had the chance to meet these companies directly through quick interview rounds. It was intense and fast-paced. Talking face-to-face with recruiters and professionals made everything feel much more real, not just theory.",
        "summit.p5": "The Digital Summit was a meaningful experience that helped me better understand the job market, discover new opportunities, and reflect on the type of professional I want to become.",

        "shimmy.title": "Shimmy BCN: Where Tech Meets Art",
        "shimmy.date": "Entrepreneurship & Creativity",
        "shimmy.p1": "Yesterday I attended a networking pop-up event organized by Shimmy BCN, and it turned out to be one of the most inspiring experiences I’ve had lately.",
        "shimmy.p2": "The event brought together young entrepreneurs from all around the world who showcased their projects, mostly handmade clothing, but also paintings, tattoo artists, and even an open mic space. Seeing so many emerging artists building their own brands, creating from zero, and taking the risk to put their work out there was genuinely motivating.",
        "shimmy.p3": "Creativity, problem-solving, and the courage to innovate are values we share across every field. Their ability to turn ideas into real products reminded me a lot of what we do in tech: starting small, iterating, learning, and building something that reflects who we are.",
        "shimmy.p4": "Witnessing their passion made me reflect on how important it is to stay curious, explore outside our own industry, and learn from people who create in completely different ways. For me, inspiration doesn't always come from code, comes from art, from risk-taking, and from people willing to bet on themselves and be different.",
        "shimmy.p5": "I left the event with a lot of admiration and a renewed motivation to keep growing, both personally and professionally.",
        "shimmy.btn_ig": "Shimmy BCN on IG",

    },

    ca: {
        // --- NAVEGACIÓ ---
        "nav.home": "Inici",
        "nav.about": "Sobre mi",
        "nav.exp": "Experiència",
        "nav.projects": "Projectes",
        "nav.events": "Esdeveniments",

        // --- INDEX: HERO ---
        "hero.greeting": "Hola, sóc",
        "hero.role": "Desenvolupadora d'Aplicacions Multiplataforma i Tècnica de Sistemes",
        "hero.desc": "Apasionada per la informàtica, amb un interès creixent en l’àmbit de la bioinformàtica i la seguretat informàtica. Em motiva comprendre i aplicar la tecnologia a l’anàlisi de dades en entorns científics, contribuint a solucions segures i eficients des d’una perspectiva tècnica i analítica.",

        // --- INDEX: CV ---
        "cv.download": "Descarregar CV:",
        "cv.es": "🇪🇸 Castellà",
        "cv.ca": "🇦🇩 Català",
        "cv.en": "🇬🇧 Anglès",

        // --- INDEX: HIGHLIGHTS ---
        "highlight.lang_title": "Nivell d'Anglès",
        "highlight.lang_level": "Alt domini",
        "highlight.it_title": "IT & SysAdmin",
        "highlight.it_desc": "Especialista en infraestructures",

        // --- SOBRE MI ---
        "about.title": "Coneix-me",
        "about.female_tech": "Com a dona apassionada per la informàtica en un sector tradicionalment dominat per homes, estic fermament decidida a trencar barreres i convertir-me en un referent femení. M’interessa especialment orientar la meva trajectòria cap a la bioinformàtica, combinant l’anàlisi de dades en entorns científics amb bones pràctiques de ciberseguretat i protecció de la informació. La meva curiositat tècnica m’impulsa a continuar aprenent i evolucionant constantment.",
        "about.education": "Educació",
        "about.edu1_title": "CFGS Desenvolupament d'Aplicacions Multiplataforma",
        "about.edu1_school": "Institut Torre de Malla",
        "about.edu2_title": "CFGM Sistemes Microinformàtics i Xarxes",
        "about.edu2_school": "INS Torre de Malla",
        "about.soft_title": "Habilitats Toves",
        "about.skill_leadership": "Lideratge",
        "about.skill_communication": "Comunicació Assertiva",
        "about.skill_problem": "Resolució de Problemes",
        "about.skill_autonomy": "Autonomia",
        "about.skill_teamwork": "Treball en Equip",
        "about.skill_responsibility": "Responsabilitat",
        "about.tech_title": "Coneixements Tècnics",
        "about.tech_prog_title": "Programació",
        "about.tech_prog_desc": "Multiplataforma, Web i Mòbil",
        "about.tech_db_title": "Bases de Dades",
        "about.tech_db_desc": "Disseny i administració (Relacionals i No Relacionals)",
        "about.tech_sys_title": "Sistemes i Xarxes",
        "about.tech_sys_desc": "Linux, Windows, Configuració LAN, Seguretat i Manteniment d'equips",
        "about.tech_methods_title": "Metodologies",
        "about.tech_methods_desc": "Scrum, Sprints, Trello",

        // --- EXPERIÈNCIA ---
        "exp.title": "Experiència Professional",
        "exp1.title": "Suport IT i Infraestructures (Programa Erasmus+)",
        "exp1.location": "República Txeca",
        "exp1.badge": "Internacional",
        "exp1.desc": "Immersió en un entorn professional multicultural utilitzant l'<strong>Anglès com a llengua principal</strong> de comunicació tècnica i d'equip.",
        "exp1.li1": "Integració ràpida i adaptació a metodologies de treball europees.",
        "exp1.li2": "Verificació de sistemes i assistència tècnica per garantir un correcte funcionament.",
        "exp1.li3": "Demostració d'alta autonomia en la resolució de problemes en un entorn internacional.",

        "exp2.title": "Tècnica de Sistemes i Xarxes (Pràctiques)",
        "exp2.location": "Institut Torre de Malla",
        "exp2.badge": "Alt Nivell de Responsabilitat",
        "exp2.highlight": "<em>Nota destacada:</em> Donada la confiança del centre en les meves capacitats tècniques, <strong>se'm va atorgar accés administratiu a la xarxa de l'institut</strong> sent encara alumna, gestionant serveis crítics i assumint responsabilitats de nivell professional.",
        "exp2.task1_title": "Supervisió de Xarxa",
        "exp2.task1_desc": "Monitoratge per minimitzar interrupcions i garantir l'estabilitat del servei als usuaris.",
        "exp2.task2_title": "Manteniment",
        "exp2.task2_desc": "Resolució d'incidències, gestió de còpies de seguretat i instal·lació de sistemes operatius.",
        "exp2.task3_title": "Documentació",
        "exp2.task3_desc": "Creació de documentació tècnica detallada per reduir consultes i millorar l'autonomia dels usuaris.",

        // --- PROJECTES ---
        "projects.title": "Els meus Projectes",
        "projects.subtitle": "D'una app fintech amb React a un e-commerce fullstack amb Node.js — projectes reals on el disseny, la lògica i el codi es combinen per construir alguna cosa que funciona de debò.",
        "imaginem.title": "IMAGINEM - Fintech Concept",
        "imaginem.desc": "Aplicació financera dissenyada per a la Gen Z que fusiona banca, IA i consciència ecològica. Inclou mode dual (Life/Bank), assistent intel·ligent i gestió d'identitat fantasma.",
        "imaginem.tag_fintech": "Fintech",
        "imaginem.btn_repo": "Veure Codi",
        "imaginem.btn_live": "Veure lloc web",

        "hybrid_sound.title": "The Hybrid Sound",
        "hybrid_sound.desc": "Portal de música alternativa amb disseny premium. Inclou maquetació avançada amb Flexbox i Grid, animacions personalitzades i una arquitectura de CSS modular.",
        "hybrid_sound.btn_repo": "Veure Codi",
        "hybrid_sound.btn_live": "Veure lloc web",

        "teelab.title": "Teelab - E-commerce Fullstack",
        "teelab.desc": "Plataforma de venda de samarretes amb filtratge dinàmic de productes, sistema de carret d'anar a comprar i generació de tiquets de comanda. Connectat a un backend a Render.",
        "teelab.tag_fullstack": "Fullstack",
        "teelab.btn_repo": "Veure Codi",
        "teelab.btn_live": "Veure lloc web",

        "tetris.title": "Tetris en Kotlin",
        "tetris.desc": "Joc de Tetris funcional per a consola desenvolupat en Kotlin amb arquitectura orientada a objectes. Inclou peces amb color ANSI, caiguda de peces, eliminació de files i una bateria de tests unitaris amb JUnit 5 que cobreix les operacions principals del tauler.",
        "tetris.tag": "Consola",
        "tetris.btn_repo": "Veure Codi",

        "trivial.title": "Trivial - Quiz App Android",
        "trivial.desc": "Joc de preguntes i respostes per a Android amb 6 categories, 3 nivells de dificultat, temporitzador animat i logo Lottie. Arquitectura MVVM amb navegació type-safe i StateFlow.",
        "trivial.tag": "Android",
        "trivial.btn_repo": "Veure Codi",
        "trivial.btn_apk": "Descarregar APK",

        "arteum.title": "Arteum - Art Explorer Android",
        "arteum.desc": "App Android per explorar la col·lecció de l'Art Institute of Chicago. Cerca en temps real, favorits amb Room, mode fosc i alternança entre vista llista i quadrícula.",
        "arteum.tag": "Android",

        // --- EVENTS ---
        "events.title": "Esdeveniments & Publicacions",
        "events.subtitle": "Un diari d'experiències, reflexions i moments que han marcat la meva trajectòria professional.",
        "erasmus.title": "El meu Erasmus a Sedlčany",
        "erasmus.date": "Estada Erasmus",
        "erasmus.p1": "Durant la meva estada Erasmus a Sedlčany, al Gymnázium a Střední odborná škola ekonomická, vaig viure un període que va donar forma profundament a la meva manera d'enfocar l'aprenentatge i el treball. Vaig passar un mes en un entorn que em va treure de la meva zona de confort i em va permetre créixer tant a nivell personal com professional.",
        "erasmus.p2": "Durant les pràctiques, vaig treballar amb Unity, desenvolupant un joc de laberints i un altre projecte de pixel-art inspirat en la meva experiència. Tot i que cap es va completar, el procés em va ajudar a aprendre, experimentar i millorar les meves habilitats de desenvolupament. També vaig tenir l'oportunitat de fer classes d'espanyol, cosa que va fer que l'intercanvi cultural fos encara més significatiu i agradable.",
        "erasmus.p3": "Miro enrere aquesta etapa amb gran apreci per tot el que em va oferir. Fins i tot ara, sovint penso en aquesta experiència. És d'aquelles que realment deixen una empremta duradora.",
        "eventos.btn_linkedin": "Veure post original",

        "hackathon.title": "24h Innovació: El naixement d'Imaginem",
        "hackathon.date": "Hackathon 24H",
        "hackathon.p1": "Durant el hashtag #24hinnovacio, vaig viure un dels desafiaments més intensos i memorables dels meus estudis fins ara. Van ser 24 hores seguides a l'institut, treballant colze a colze amb el meu equip, construint idees, resolent problemes, lluitant contra el rellotge i empenyent-nos molt més enllà del que crèiem capaços. Esgotador, caòtic i honestament inoblidable.",
        "hackathon.p2": "El nostre repte va venir d'imagin: dissenyar la versió futura de la seva app. I d'aquella llarga nit d'insomni va néixer Imaginem, un concepte fintech complet creat en només un dia.",
        "hackathon.p3": "No només vam dissenyar funcionalitats; vam crear una visió del que podria ser la banca per a la Gen Z:",
        "hackathon.li1": "transformant diners en el temps que costa guanyar-los; una nova manera de crear consciència financera.",
        "hackathon.li2": "un assistent integrat capaç d'interpretar la intenció de l'usuari i actuar en conseqüència.",
        "hackathon.li3": "targetes d'un sol ús i una bústia segura per a compres online.",
        "hackathon.li4": "gestió de divises en temps real sense comissions més un sistema de pressupost de viatge amb IA.",
        "hackathon.li5": "un mapa d'eco-recompenses promovent negocis locals sostenibles.",
        "hackathon.li6": "un sistema on els ingressos s'organitzen automàticament en estalvis, necessitats i estil de vida.",
        "hackathon.p4": "Però més enllà del projecte en si, el que realment em va marcar va ser l'experiència. Hores de treball en equip, decisions tècniques sota pressió, creativitat espontània, moments de frustració i aquesta energia que sorgeix quan un grup treballa cap a un mateix objectiu.",
        "hackathon.p5": "No va ser només una competició; va ser la prova del que podem construir quan col·laborem, confiem els uns en els altres i seguim endavant fins i tot quan estem cansats.",
        "hackathon.p6": "Estic genuïnament orgullosa del que vam crear junts, i de tot el que vaig aprendre durant aquelles 24 hores. Imaginem és un recordatori del que poden aconseguir la passió, el treball en equip i la resiliència.",
        "hackathon.btn_project": "Veure Projecte Imaginem",

        "womensday.title": "Dia Internacional de la Dona a IT",
        "womensday.date": "8M - Reflexió",
        "womensday.p1": "Pel Dia Internacional de la Dona, volia compartir una mica sobre què vol dir ser dona a IT, un camp on encara sentim la pressió d'haver de demostrar-nos a nosaltres mateixes el doble, de ser 'prou bones', de justificar cada pas que fem. És un espai que estimo, però també és un on notes constantment com de diferent pot ser l'experiència depenent del teu gènere.",
        "womensday.quote": "Una de les dones que més m'inspira és Hedy Lamarr. En una època en què la societat només volia que les dones fossin belles i silencioses, ella es va negar a ser definida per això. Juntament amb George Antheil, va crear el sistema de salt de freqüència que més tard es va tornar essencial per al Wi-Fi, Bluetooth i GPS, tecnologia que tots fem servir diàriament. El fet que una actriu, admirada per la seva aparença, també revolucionés la comunicació moderna és un recordatori poderós que la brillantor no té gènere ni una forma predeterminada.",
        "womensday.p2": "La seva història és important per a mi perquè és la prova que la societat pot subestimar les dones, però no pot decidir de què som capaços.",
        "womensday.p3": "I encara que avui sigui 8M, vull ser clara: el feminisme i la lluita pel reconeixement a tech no passen només un cop l'any. Són part de la nostra realitat quotidiana: a cada classe, cada projecte, cada reunió on sentim el pes de les expectatives, els dubtes, els estereotips. Ser dona a IT significa obrir-se pas a través d'això, presentar-se de tota manera i reclamar l'espai que sempre hauria d'haver estat nostre.",
        "womensday.btn_ig": "Veure post a Instagram",

        "mwc.title": "Talent Arena & MWC: El futur del Digital Health",
        "mwc.date": "Congrés Tecnològic",
        "mwc.p1": "Fa unes setmanes, vaig tenir l'oportunitat de participar al #TalentArena i al #MobileWorldCongress, dos esdeveniments que em van recordar per què espais com aquests importen tant per a qualsevol que estigui construint un futur en la tecnologia.",
        "mwc.p2": "Vaig passar dimarts i dimecres al Talent Arena, assistint a diverses xerrades inspiradores. Una d'elles va ser dirigida per Albert Sampietro Ventosa, que va parlar sobre ciberseguretat i va emfatitzar una cosa essencial: la seguretat és una responsabilitat compartida per tots en una organització, no només pels equips tècnics.",
        "mwc.p3": "Una altra sessió que realment va ressonar amb mi va ser la del Dr. Alexander Holbach i Jared Worful, centrada en com la IA pot accelerar el desenvolupament farmacèutic, millorar l'anàlisi de dades i transformar la manera com abordem la innovació en salut. Com a algú que vol treballar en la intersecció de l'atenció mèdica i la tecnologia, aquesta perspectiva es va sentir especialment alineada amb els meus objectius.",
        "mwc.p4": "Després de les xerrades, vaig passar temps parlant amb diferents empreses, fent preguntes i aprenent com apliquen la tecnologia en entorns reals. Va ser encoratjador veure quantes d'elles estan explorant solucions connectades amb la salut, les dades i la innovació centrada en l'usuari, àrees en les quals estic profundament interessada.",
        "mwc.p5": "Més tard aquella setmana, vaig visitar el #MobileWorldCapitalBarcelona, on vaig poder veure com els principals actors tecnològics estan donant forma al futur dels serveis digitals. En lloc de només llegir sobre innovació, vaig poder experimentar-la directament, i em va donar una visió molt més clara de cap a on es dirigeix la indústria.",
        "mwc.p6": "En general, aquesta experiència va reforçar la meva motivació per continuar creixent en salut digital i continuar construint el camí que m'impulsa: combinar la informàtica amb un impacte significatiu en el sector de la salut.",

        "summit.title": "Digital Summit: Connectant amb el sector tech",
        "summit.date": "Networking & Talent",
        "summit.p1": "Fa unes setmanes vaig participar al #DigitalSummit, una activitat on participem tots els estudiants de primer any.",
        "summit.p2": "Sincerament, va resultar ser molt més valuós del que m'esperava.",
        "summit.p3": "L'esdeveniment es va dividir en dues parts. A la primera, diverses empreses van presentar qui són, què fan i el tipus de talent que busquen. Va ser una gran oportunitat per entendre què espera la indústria tecnològica actual dels nous professionals i com podem començar a preparar-nos des del primer dia.",
        "summit.p4": "A la segona part, vam tenir l'oportunitat de conèixer aquestes empreses directament a través de rondes ràpides d'entrevistes. Va ser intens i dinàmic. Parlar cara a cara amb reclutadors i professionals va fer que tot se sentís molt més real, no només teoria.",
        "summit.p5": "El Digital Summit va ser una experiència significativa que em va ajudar a entendre millor el mercat laboral, descobrir noves oportunitats i reflexionar sobre el tipus de professional en què em vull convertir.",

        "shimmy.title": "Shimmy BCN: On la tecnologia i l'art es troben",
        "shimmy.date": "Emprenedoria & Creativitat",
        "shimmy.p1": "Ahir vaig assistir a un esdeveniment pop-up de networking organitzat per Shimmy BCN, i va resultar ser una de les experiències més inspiradores que he tingut darrerament.",
        "shimmy.p2": "L'esdeveniment va reunir joves emprenedors d'arreu del món que van mostrar els seus projectes, principalment roba feta a mà, però també pintures, artistes del tatuatge i fins i tot un espai de micròfon obert. Veure tants artistes emergents construint les seves pròpies marques, creant des de zero i assumint el risc de mostrar el seu treball va ser genuïnament motivador.",
        "shimmy.p3": "La creativitat, la resolució de problemes i el coratge per innovar són valors que compartim en tots els camps. La seva capacitat per convertir idees en productes reals em va recordar molt al que fem en tecnologia: començar a poc a poc, iterar, aprendre i construir alguna cosa que reflecteixi qui som.",
        "shimmy.p4": "Presenciar la seva passió em va fer reflexionar sobre la importància de mantenir la curiositat, explorar fora de la nostra pròpia indústria i aprendre de persones que creen de maneres completament diferents. Per mi, la inspiració no sempre ve del codi, ve de l'art, d'assumir riscos i de persones disposades a apostar per si mateixes i ser diferents.",
        "shimmy.p5": "Vaig sortir de l'esdeveniment amb molta admiració i una motivació renovada per continuar creixent, tant personalment com professionalment.",
        "shimmy.btn_ig": "Perfil de Shimmy BCN",

    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("lang-selector");

    let currentLang = localStorage.getItem("portfolioLang") || navigator.language.substring(0, 2);
    if (!translations[currentLang]) currentLang = "es";

    langSelector.value = currentLang;
    updateContent(currentLang);

    langSelector.addEventListener("change", (e) => {
        const newLang = e.target.value;
        localStorage.setItem("portfolioLang", newLang);
        updateContent(newLang);
    });
});

function updateContent(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key] !== undefined) {
            // Usar innerHTML para claves que pueden contener etiquetas HTML
            const htmlKeys = ["exp1.desc", "exp1.li1", "exp1.li2", "exp1.li3", "exp2.highlight"];
            if (htmlKeys.includes(key)) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}