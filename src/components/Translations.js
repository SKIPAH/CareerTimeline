let locale = "en";

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
    "homepage-introduction-text-short-note": "Note!! This website is still under construction! Texts, colors, layouts etc etc are not final and I am still a beginner in Web development. I will update the website each time I add/fix/learn something new",
    "homepage-introduction-text": "I have recently graduated as a Bachelor of Engineering specialized in software development. I wanted to learn more about Web Development and decided to create my own website to showcase all kinds of stuff what I like to do and have accomplished in my life! Plan is to update this website always when I feel like adding information in it. Also idea is to have this as a cool personal project to show in CV when applying for job opportunities in the tech industry or possibly something else. I currently have most experience related to programming with the Unity game engine and C# language. I consider myself still a newbie with dev skills, so this website will definitely have lots of errors.",
    "homepage-introduction-text-2": "On top you can find different categories of my hobbies/interests/job related stuff and social media links.",
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
    "homepage-introduction-text-short-note": "Huom! Tämä sivusto on vielä kesken! Tekstit, värit, layoutit jne jne. eivät ole vielä lopullisia ja olen vielä aloittelija. Päivitän sivua aina kun lisään/korjaan/opin otain uutta.",
    "homepage-introduction-text": "Olen vasta valmistunut tieto ja viestintätekniikan insinööri suuntautumisena ohjelmistokehitys. Halusin opetella Web-kehitystä, joten päätin luoda oman kotisivun jossa voin näyttää kaikenlaisia omaan elämään liittyviä asioita! Ajatuksena on päivittää tätä sivua aina kun keksin jotain uutta lisättävää. Ajatuksena myös käyttää tätä projektia CV:ssä, jotta voin helposti näyttää taitojani ja mitä olen kykenyt saamaan aikaan, kun haen töitä tietetekniikan alalta. Tällä hetkellä minulla kuitenkin on eniten kokemusta Unity pelimoottorin ja C# kielen kanssa. Mielestäni olen vielä aloittelija, joten tällä sivustolla tulee olemaan virheitä.",
    "homepage-introduction-text-2": "Sivun yläosasta löydät lisää harrastuksiin ja työhön liittyviä asioita sekä sosiaalisen median linkit.",
  },
};


export const getTranslation = (key, currentLocale = locale) => {
  return Translations[currentLocale][key];
};

export const getCurrentLocale = () => locale;

export const setLocale = (newLocale) => {
  locale = newLocale;
};

export default Translations;
