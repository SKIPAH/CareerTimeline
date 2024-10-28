let locale = "en"; // Changed from const to let

const Translations = {
  en: {
    "navbar-home": "HOME",
    "navbar-work": "WORK AND EDUCATION",
    "navbar-esports": "ESPORTS",
    "navbar-dev": "DEV",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TEST PAGE",
  },
  fi: {
    "navbar-home": "ETUSIVU",
    "navbar-work": "TYÖ JA KOULUTUS",
    "navbar-esports": "E-URHEILU",
    "navbar-dev": "OHJELMOINTI",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TESTI",
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
  const translation = Translations[locale][key];
  element.innerText = translation;
}

function toggleLanguage() {
  // Toggle the locale
  locale = locale === "en" ? "fi" : "en";

  // Update all elements with new translations
  document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
}

export default Translations;
