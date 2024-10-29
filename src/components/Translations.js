let locale = "en"; // Changed from const to let

const Translations = {
  en: {
    "navbar-home": "HOME",
    "navbar-work": "WORK AND EDUCATION",
    "navbar-esports": "ESPORTS",
    "navbar-dev": "DEV",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TEST PAGE",
    "homepage-title": "WEBSITE OF JUSSI MEHTÄLÄ",
    "homepage-introduction-text-short": "Yo! My name is Jussi Mehtälä, also known as SKIPAH in the gaming community and I am 28-year old fella from Finland.",
  },
  fi: {
    "navbar-home": "ETUSIVU",
    "navbar-work": "TYÖ JA KOULUTUS",
    "navbar-esports": "E-URHEILU",
    "navbar-dev": "OHJELMOINTI",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TESTI",
    "homepage-title": "JUSSI MEHTÄLÄN KOTISIVU",
    "homepage-introduction-text-short": "Moro! Mun nimi on Jussi Mehtälä, myös tunnettu nimellä SKIPAH kilpapelaamis yhteisössä ja olen 28 vuotias jätkä suomesta.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  // Translate elements when the page loads
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
  
  // Add event listener for the toggle button after the DOM is fully loaded
  const toggleButton = document.getElementById("languageToggleBtn");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleLanguage);
  }
});

function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const Translation = Translations[locale][key];
  element.innerText = Translation;
}


function toggleLanguage() {
  // Toggle the locale
  locale = locale === "en" ? "fi" : "en";

  // Update all elements with new translations
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
  
  const toggleButton = document.getElementById("languageToggleBtn");
  toggleButton.innerHTML = locale === "en" ? "SUOMEKSI" : "ENGLISH";
}

export default Translations;
