import { testFunction } from "../components/TestFunction";

export default function Home() {
  return (
    <>
      <section className="introduction">
        <div className="intro">
          <img
            onClick={testFunction}
            id="profilepic"
            src="src/files/images/profiilikuva.png"
            alt="profile picture"
          ></img>
          <h1 className="title-text" data-i18n-key="homepage-title">
            Website of Jussi Mehtälä
          </h1>
        </div>
        <div className="container">
          <p
            className="introduction-text-short"
            data-i18n-key="homepage-introduction-text-short"
          >
            Yo! My name is Jussi Mehtälä, also known as SKIPAH in the gaming
            community, and I am a 28-year-old fella from Finland.
          </p>
          <p
            className="introduction-text-short"
            data-i18n-key="homepage-introduction-text-short-note"
          >
            Note!! This website is still under construction! Texts, colors,
            layouts etc etc are no final and I am still a beginner in Web
            development.
          </p>
        </div>
        <div className="container">
          <p className="introduction-text" data-i18n-key="homepage-introduction-text">
            I have recently graduated as a Bachelor of Engineering specialized
            in software development. I wanted to learn more about Web
            Development and decided to create my own website to showcase all
            kinds of stuff what I like to do and have accomplished in my life!
            Plan is to update this website always when I feel like adding
            information in it. Also idea is to have this as a cool personal
            project to show in CV when applying for job opportunities in the
            tech industry or possibly something else. I currently have most
            experience related to programming with the Unity game engine and C#
            language. I consider myself still a newbie with dev skills, so this
            website will definitely have lots of errors.
          </p>
          <p className="introduction-text" data-i18n-key="homepage-introduction-text-2">
            This is the homepage of my website with some introduction and
            information about the project. On top you can find different
            categories of my hobbies/interests/job related stuff and social
            media links.
          </p>
        </div>
      </section>
    </>
  );
}
