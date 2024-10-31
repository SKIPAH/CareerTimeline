import YoutubeEmbed from "../components/YoutubeEmbed";
import HorizontalPictures from "../components/HorizontalPictures";
import assembly from "../files/images/nyyrikkipictures/assembly.jpg";
import skipah4 from "../files/images/nyyrikkipictures/skipah4.JPG";
import skipahuusi from "../files/images/nyyrikkipictures/skipahuusi.jpeg";
import nyyrikkiskipah2 from "../files/images/nyyrikkipictures/nyyrikkiskipah2.png";
import skipah3 from "../files/images/nyyrikkipictures/skipah3.JPG";

export default function EsportsPage() {
  return (
    <>
      <section className="esports-section">
        <div className="container">
          <h1 className="title-text">
            My journey as a esports athlete!{" "}
            <img
              className="image"
              src={assembly}
              alt="Assembly Summer 2018 stage picture of SKIPAH"
            ></img>
          </h1>
          <div className="esports-introduction">
            <img
              className="image"
              src={skipah4}
              alt="Lantrek BYOC picture. First lan event"
            ></img>
            <p className="esports-text">
              During 2019-2022 I was a competitive esports athlete representing
              multiple Finnish and European teams and organizations in Overwatch
              and Valorant. Here is my{" "}
              <a
                className="esports-link"
                href="https://liquipedia.net/overwatch/SKIPAH"
              >
                Liquidpedia
              </a>{" "}
              page showing all the achievements and teams.
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              My love for gaming started when I played Donkey Kong Country on
              Super Nintendo as a little kid. I have 4 brothers and I've usually
              been the one doing the hard parts of levels if my brothers
              couldn't. My friend groups in elementary school basically formed
              around other kids that liked games like Runescape and all the
              DragonBall Z games. Once I moved to another city for 7th grade, I
              ended up finding group of friends that played Call Of Duty 2 and 4
              on pc, where I got my first introduction to esports side of
              gaming, which wasn't really a thing back then during 2010-2012.
            </p>
            <img
              className="image"
              src={nyyrikkiskipah2}
              alt="Lantrek BYOC Picture with Nyyrikki Beanie on"
            ></img>
          </div>
          <div className="esports-introduction">
            <img
              className="image"
              src={skipah3}
              alt="SKIPAH and Jönssöni watching Battalion showmatch at Lantrek"
            ></img>
            <p className="esports-text">
              During high school when I stopped competing in track and field and
              wrestling, I put crazy hours in Dota 2 which grew rapidly as a
              esports title. I got my first real experiences what playing in a
              team environment competitively meant. After high school I was
              doing the mandatory finnish military service and while I had few
              months left, I found out about Overwatch videogame that was going
              to be released just after my service ends. I said to my military
              friends that I'm going to become a professional Overwatch player
              and started instantly practicing hard.
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              During the first season of ranked I managed to get my peak rank to
              top500, but ended up falling outside once the season ended. I
              realized that I might have the potential, because I got contacted
              few times to join different teams. After the first season I worked
              as a security guard and my shifts were mostly during the nights,
              which made me unable to even play for any teams and long working
              hours made my practicing even harder. I still slightly regret that
              I didn't pursue Overwatch fully during that time, as I might have
              ended up gaining different opportunities in the scene but it is
              what it is. Once I quit my security guard job and started studying
              in Oulu University of Applied Sciences, I could put more time into
              Overwatch.
            </p>
            <img
              className="image"
              src={skipahuusi}
              alt="Newest playerpicture"
            ></img>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              I played in some finnish teams here and there and competed in few
              small online tournaments. One day I noticed a post about a finnish
              organization called Nyyrikki Esports searching for players to
              represent them in Overwatch. This of course sparked my interest as
              it might be my chance to start a professional career what I've
              planned to do. ILL CONTINUE THIS LATER..
            </p>
          </div>
          <div className="esports-introduction">
            <p className="esports-text">
              Best fragmovie that amazing fella named{" "}
              <a href="https://x.com/mauserzjeh">Mauser</a> made for me
            </p>
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="4MIz6BQikh4"
            ></YoutubeEmbed>
          </div>
          <div className="esports-introduction">
            <YoutubeEmbed
              className="esports-youtube-embed"
              embedId="uY3LpNTSYqg"
            ></YoutubeEmbed>
            <p className="esports-text">
              One of my favorite fragmovie that I've personally made.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
