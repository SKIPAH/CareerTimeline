import work from "../files/images/work.webp";
import school from "../files/images/school.webp";  
import hreds from "../files/images/hreds.webp";
import nyyrikki from "../files/images/nyyrikki.webp";



interface TimelineElement {
    id: number;
    title: string;
    location: string;
    description: string;
    date: string;
    icon: string;
    buttonText?: string;
    buttonLink?: string;
    buttonText2?: string;
    buttonLink2?: string;
  }
  
  interface TimelineElementsType {
    en: TimelineElement[];
    fi: TimelineElement[];
  }
  
  const TimelineElements: TimelineElementsType = {
    en: [
        {
          id: 1,
          title: "Nucu Oy. Software developer. Intern/Thesis",
          location: "Oulu",
          description: "Worked on a WebGL 3D Product Configurator and Simulator for Nucu Oy's products. You are able to test a modified version of the simulator on the Dev page",
          buttonText: "Project link",
          buttonText2: "Nucu Oy",
          date: "May 2023-May 2024",
          icon: work,
          buttonLink: "https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU",
          buttonLink2: "https://www.nucu.fi/"
        },
        {
          id: 2,
          title: "Oulu University of Applied Sciences.",
          location: "Oulu",
          description: "Bachelor of Engineering in Information Technology specialized in Software development",
          buttonText: "School Website",
          date: "August 2017-May 2024",
          icon: school,
          buttonLink: "https://oamk.fi/",
        },
        {
          id: 3,
          title: "Helsinki REDS, Esports Athlete",
          location: "Oulu, Remote",
          description: "Represented Helsinki REDS in Valorant videogame as a esports athlete competing in online tournaments.",
          buttonText: "VLR Profile",
          date: "August 2020-January 2021",
          icon: hreds,
          buttonLink: "https://www.vlr.gg/player/3670/skipah",   
        },
        {
          id: 4,
          title: "Nyyrikki Esports, Esports Athlete",
          location: "Oulu, Remote",
          description: "Represented Nyyrikki Esports in Overwatch videogame as a esports athlete competing in online and lan tournament events in Finland.",
          buttonText: "Liquidpedia profile",
          date: "January 2018-April 2019",
          icon: nyyrikki,
          buttonLink: "https://liquipedia.net/overwatch/SKIPAH",
        },
        {
          id: 5,
          title: "Entersec Oy, Security guard.",
          location: "Ylivieska, Haapavesi, Oulainen",
          description: "Working as a security guard in various locations.",
          buttonText: "Entersec Oy",
          date: "February 2017-June 2017",
          icon: work,
          buttonLink: "https://www.entersec.fi/",
    
        },
      ],
      fi: [
          {
            id: 1,
            title: "Nucu Oy. Ohjelmistokehittäjä. Harjoittelija/Opinnäytetyö",
            location: "Oulu",
            description: "Suunnittelin 3D-tuotekonfiguraattoria ja simulaattoria Unity-pelimoottorilla Nucun tuotteille, jotta asiakkaat voivat nähdä selaimessa, kuinka tuotteet toimivat ilman fyysistä versiota.",
            buttonText: "Projekti linkki",
            buttonText2: "Nucu Oy",
            date: "Toukokuu 2023-Toukokuu 2024",
            icon: work,
            buttonLink: "https://jussiprojects.itch.io/webglnucutest?secret=BtYgvJZZzU2b0GynO4y9q7XY5WU",
            buttonLink2: "https://www.nucu.fi/"
          },
          {
            id: 2,
            title: "Oulun ammattikorkeakoulu",
            location: "Oulu",
            description: "Tieto ja viestintätekniikan insinööri suuntautumisena ohjelmistokehitys",
            buttonText: "OAMK Kotisivu",
            date: "Elokuu 2017-Kesäkuu 2024",
            icon: school,
            buttonLink: "https://oamk.fi/",
          },
          {
            id: 3,
            title: "Helsinki REDS, E-Urheilija",
            location: "Oulu, Etätyö",
            description: "Helsinki REDS joukkueen edustus Valorant videopelissä eri tapahtumissa.",
            buttonText: "VLR Profiili",
            date: "Elokuu 2020-Tammikuu 2021",
            icon: hreds,
            buttonLink: "https://www.vlr.gg/player/3670/skipah",
          },
          {
            id: 3,
            title: "Helsinki REDS, E-Urheilija",
            location: "Oulu, Etätyö",
            description: "Helsinki REDS joukkueen edustus Valorant videopelissä eri tapahtumissa.",
            buttonText: "VLR Profiili",
            date: "Elokuu 2020-Tammikuu 2021",
            icon: hreds,
            buttonLink: "https://www.vlr.gg/player/3670/skipah",
          },
          {
            id: 5,
            title: "Entersec Oy, Vartija.",
            location: "Ylivieska, Haapavesi, Oulainen",
            description: "Vartijan työ päivällä ja yöllä eri kohteissa.",
            buttonText: "Entersec Oy",
            date: "Helmikuu 2017-Kesäkuu 2017",
            icon: work,
            buttonLink: "https://www.entersec.fi/",
      
          },
        ]
  };
  
  export default TimelineElements;