import { Track } from "./Track";

const TRACKS = [
  {
    number: 1,
    name: "Ben-Hur",
    composer: "Miklós Rózsa,arranged Darrol Barry",
  },
  {
    number: 2,
    name: "The Mission",
    composer: "Ennio Morricone, arranged Frank Bernaerts",
  },
  {
    number: 3,
    name: "Midway March",
    composer: "John Williams, arranged Darrol Barry",
  },
  {
    number: 4,
    name: ",Pirates of the Caribbean",
    composer: "Mlaus Badelt, arranged John Blanken",
  },
  {
    number: 5,
    name: "Singin' in the Rain",
    composer: "Nacio Herb Brown, arranged Alan Fernie",
  },
  {
    number: 6,
    name: ",The Mask of Zorro",
    composer: "James Horner, arranged Darrol Barry",
  },
  {
    number: 7,
    name: "Born Free",
    composer: "John Barry, arranged Alan Catherall",
  },
  {
    number: 8,
    name: "The Best of Bond",
    composer: "John Barry &amp; Monty Norman, arranged Darrol Barry",
  },
  {
    number: 9,
    name: "The Lord of the Rings",
    composer: "Howard Shore, arranged Frank Bernaerts",
  },
  {
    number: 10,
    name: "Jurassic Park",
    composer: "John Willams, arranged Alan Catherall",
  },
  {
    number: 11,
    name: "Out of Africa",
    composer: "John Barry, arranged Darrol Barry",
  },
  {
    number: 12,
    name: "Gladiator",
    composer: "Hans Zimmer, arrange Frank Bernaerts",
  },
  {
    number: 13,
    name: "Hymn to the Fallen",
    composer: "John Willams, arranged Frank Bernaerts",
  },
  {
    number: 14,
    name: "Zulu (The Battle of Rorke's Drift)",
    composer: "John Barry, arranged Roger Thorne",
  },
];


export const TrackListing = () => {
  return (
    <ol>
      {TRACKS.map((track, key) => (
        <Track
          key={key}
          number={track.number}
          name={track.name}
          composer={track.composer}
        />
      ))}
    </ol>
  );
};
