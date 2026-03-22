// main.js
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.exp": "Experiencia",
        "nav.projects": "Proyectos",
        "nav.events": "Eventos",
        "hero.greeting": "Hola, soy",
        "hero.role": "Desarrolladora de Aplicaciones Multiplataforma & Técnica en Sistemas",
        "hero.desc": "Apasionada por el código, la infraestructura y la resolución de problemas. Construyendo soluciones eficientes y seguras.",
        "cv.download": "Descargar CV",
        "cv.es": "🇪🇸 Español",
        "cv.ca": "🇦🇩 Català",
        "cv.en": "🇬🇧 English",
        "about.title": "Conóceme",
        "about.female_tech": "Como mujer apasionada por la informática en un sector tradicionalmente dominado por hombres, estoy firmemente decidida a romper barreras y convertirme en un referente femenino. Mi curiosidad técnica me impulsa a no dejar de aprender y mejorar constantemente.",
        // Añade aquí el resto de traducciones que necesites
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.exp": "Experience",
        "nav.projects": "Projects",
        "nav.events": "Events",
        "hero.greeting": "Hi, I'm",
        "hero.role": "Cross-platform App Developer & Systems Technician",
        "hero.desc": "Passionate about code, infrastructure, and problem-solving. Building efficient and secure solutions.",
        "cv.download": "Download Resume",
        "cv.es": "🇪🇸 Spanish",
        "cv.ca": "🇦🇩 Catalan",
        "cv.en": "🇬🇧 English",
        "about.title": "About Me",
        "about.female_tech": "As a woman passionate about IT in a male-dominated field, I am determined to break barriers and become a female role model. My technical curiosity drives me to constantly learn and improve.",
    },
    ca: {
        "nav.home": "Inici",
        "nav.about": "Sobre mi",
        "nav.exp": "Experiència",
        "nav.projects": "Projectes",
        "nav.events": "Esdeveniments",
        "hero.greeting": "Hola, sóc",
        "hero.role": "Desenvolupadora d'Aplicacions Multiplataforma i Tècnica de Sistemes",
        "hero.desc": "Apassionada pel codi, la infraestructura i la resolució de problemes. Construint solucions eficients i segures.",
        "cv.download": "Descarregar CV",
        "cv.es": "🇪🇸 Castellà",
        "cv.ca": "🇦🇩 Català",
        "cv.en": "🇬🇧 Anglès",
        "about.title": "Coneix-me",
        "about.female_tech": "Com a dona apassionada per la informàtica en un sector tradicionalment dominat per homes, estic fermament decidida a trencar barreres i convertir-me en un referent femení. La meva curiositat tècnica m'impulsa a no deixar d'aprendre i millorar.",
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById("lang-selector");
    
    // Detectar idioma del navegador o usar el guardado
    let currentLang = localStorage.getItem("portfolioLang") || navigator.language.substring(0, 2);
    if (!translations[currentLang]) currentLang = "es"; // Default a español
    
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
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}