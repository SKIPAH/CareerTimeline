import YoutubeEmbed from "../components/YoutubeEmbed";

export default function EsportsPage() {
  return (
    <>
      <section className="esports-section">
        <h1 className="title-text">Esports Pages</h1>
        <p className="esports-text">
          During 2019-2022 I was a competitive esports athlete representing
          multiple Finnish and European teams and organizations in Overwatch and
          Valorant videogames.
        </p>
        <a href="https://liquipedia.net/overwatch/SKIPAH">Liquidpedia</a>
      </section>
      <YoutubeEmbed embedId="uY3LpNTSYqg"></YoutubeEmbed>
    </>
  );
}
