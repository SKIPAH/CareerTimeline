let language = "en";

const Translations = {
  en: {
    "navbar-home": "HOME",
    "navbar-work": "WORK AND EDUCATION",
    "navbar-esports": "ESPORTS",
    "navbar-dev": "DEV",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TEST PAGE",
    "homepage-title": "WEBSITE OF JUSSI MEHTÄLÄ",
    "homepage-introduction-text-short": "Yo! My name is Jussi Mehtälä, also known as SKIPAH in the gaming community, and I am a 28-year-old fella from Finland.",
    "homepage-introduction-text-short-note": "NOTE!! This website is still under construction! Texts, colors, layouts etc are not final. I will update the website each time I add/fix/learn something new",
    "homepage-introduction-text": "I have recently graduated as a Bachelor of Engineering in information technology specialized in software development. I wanted to learn more about Web Development and decided to create my own website to showcase all kinds of stuff what I like to do and have accomplished in my life!",
    "homepage-introduction-text-2": "On top you can find different categories of my hobbies/interests/job related stuff and social media links.",
    "timeline-title-text": "Education and work experience",
    "dev-title": "Development related projects and files",
    "dev-text": "All my important work and school related files and projects can be found here",
    "dev-linkedin": "My",
    "dev-linkedin-2": "and",
    "dev-github-3": "profiles",
    "dev-cv": "My",
    "dev-cv-2": "and",
    "dev-webgl": "My WebGL project, which I made for my thesis.",
    "dev-webgl-note": "NOTE!! WebGL does not support mobile properly yet. Enable hardware acceleration, if you are using Google Chrome",
    "fitness-title": "Sports and Fitness",
    "dev-thesis": "Link to whole thesis",
    "dev-itch": "Itch IO project of my thesis",
    "aboutMe": "About me",
    "aboutMe-text": "My name is Jussi Mehtälä and this is my personal website where I show career related information and my hobbies.",
    "followMe": "Follow me on social media",
    "contactMe": "Contact me",
  },
  fi: {
    "navbar-home": "ETUSIVU",
    "navbar-work": "TYÖ JA KOULUTUS",
    "navbar-esports": "E-URHEILU",
    "navbar-dev": "OHJELMOINTI",
    "navbar-fitness": "FITNESS",
    "navbar-test": "TESTI",
    "homepage-title": "JUSSI MEHTÄLÄN KOTISIVU",
    "homepage-introduction-text-short": "Moro! Mun nimi on Jussi Mehtälä, myös tunnettu nimellä SKIPAH kilpapelaamis yhteisössä ja olen 28-vuotias jätkä suomesta.",
    "homepage-introduction-text-short-note": "HUOM! Tämä sivu on vielä kesken! Tekstit, värit, layoutit jne eivät ole vielä lopullisia. Päivitän sivua aina kun lisään/korjaan/opin jotain uutta.",
    "homepage-introduction-text": "Olen vasta valmistunut tieto ja viestintätekniikan insinööri suuntautumisena ohjelmistokehitys. Halusin opetella Web-kehitystä, joten päätin luoda oman kotisivun jossa voin näyttää kaikenlaisia omaan elämään liittyviä asioita!",
    "homepage-introduction-text-2": "Sivun yläosasta löydät lisää harrastuksiin ja työhön liittyviä asioita sekä sosiaalisen median linkit.",
    "timeline-title-text": "Koulutus ja työkokemus",
    "dev-title": "Ohjelmointiin liittyvät asiat",
    "dev-text": "Kaikki tärkeimmät työhön ja koulutukseen liittyvät tiedostot ja projektit löytyvät täältä.",
    "dev-linkedin": "Minun",
    "dev-linkedin-2": "ja",
    "dev-github-3": "profiilit",
    "dev-cv": "Minun",
    "dev-cv-2": "ja",
    "dev-webgl": "Minun WebGL projekti, jonka tein opinnäytetyönä.",
    "dev-webgl-note": "HUOM!! WebGL Unity projektit eivät välttämättä toimi mobiililaitteilla. Aktivoi laitteistokiihdytys, jos käytät Google Chromea.",
    "fitness-title": "Urheilu ja fitness",
    "dev-thesis": "Linkki opinnäytetyöhön",
    "dev-itch": "Itch IO linkki projektiini",
    "aboutMe": "Tietoa minusta",
    "aboutMe-text": "Olen Jussi Mehtälä ja tämä on minun oma verkkosivuni, josta voit löytää tietoa minusta ja harrastuksistani.",
    "followMe": "Seuraa minua sosiaalisessa mediassa",
    "contactMe": "Ota yhteyttä",
  },
};


export const getTranslation = (key, currentLanguage = language) => {
  return Translations[currentLanguage][key];
};

export const getCurrentLanguage = () => language;

export const setLanguage = (newLanguage) => {
  language = newLanguage;
};

export default Translations;
