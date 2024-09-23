import YoutubeEmbed from "../components/YoutubeEmbed";
import InstagramEmbedVideo from "../components/InstagramEmbedVideo";

export default function Fitness() {
  return (
    <>
      <section className="fitness-section">
        <div className="container">
          <h1 className="title-text">My Sports and Fitness journey</h1>
          <p className="fitness-text">
            I have been quite active my whole life in different sports.
            Currently though I'm not competing in any sport, but active in gym
            and interested in all kinds of strength related activities and being
            athletic in general.
          </p>
          <p className="fitness-text">
            I started doing track and field when I was 5-years old and wrestling
            when I was 7. I built my foundation basically by training and
            competing in those sports for over 10+ years. I tried to compete in
            skiing during winter and once ended up joining a Football practice,
            but very quickly realized that team sports wasnt for me. During high
            school I slowly lost interest in competing, as I didn't find myself
            improving or getting to a level where I wanted. At the same time my
            interest towards esports grew rapidly and you can find my journey in
            that area in the esports section of my website. Luckily when the
            pandemic hit and I noticed myself getting in awful shape both
            physically and mentally, I started exercising regularly and found
            great joy from it. I haven't tried wrestling or track and field
            again though, but I'm very interested in strength related sports
            like powerlifting, bodybuilding, strongman and calisthenics. My goal
            currently is to just be overall athletic and not just focusing on
            for example doing only powerlifting.
          </p>
        </div>
      </section>
      <InstagramEmbedVideo embedURL="C1XDVxIMNAX"></InstagramEmbedVideo>
      <YoutubeEmbed
        embedId="8t4Bgw02xTI"
        className="fitness-embed"
      ></YoutubeEmbed>
    </>
  );
}
