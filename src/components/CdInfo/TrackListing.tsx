import type { TrackInfo } from "./TrackInfo";
import { Track } from "./Track";

export const TrackListing = ({ tracks }: { tracks: TrackInfo[] }) => {
  return (
    <ol>
      {tracks.map((track, key) => (
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
