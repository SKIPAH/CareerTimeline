let locale = "en"; // Changed from const to let

const Translations = {
  en: {
    "navbar-home": "Home",
    "navbar-work": "Work and Education",
    "navbar-esports": "Esports",
    "navbar-dev": "Dev",
    "navbar-fitness": "Fitness",
    "navbar-test": "TEST PAGE",
  },
  fi: {
    "navbar-home": "Etusivu",
    "navbar-work": "Työ ja koulutus",
    "navbar-esports": "E-urheilu",
    "navbar-dev": "Sovelluskehitys",
    "navbar-fitness": "Fitness",
    "navbar-test": "Testi sivu",
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
