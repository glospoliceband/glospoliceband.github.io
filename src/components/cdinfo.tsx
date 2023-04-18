import * as React from "react";
import { CdCover } from "./images";

interface TrackProps {
  key: number;
  number: number;
  name: string;
  composer: string;
}

interface TracksProps {
  tracks: TrackProps[];
}

const Track = ({ number, name, composer }: TrackProps) => {
  return (
    <li key={number}>
      <p className="mb-0">{name}</p>
      <p className="text-sm font-light mt-0">{composer}</p>
    </li>
  );
};

export const TrackListing = ({ tracks }: TracksProps) => {
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

export const CdInfo = ({ tracks }: TracksProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <CdCover />
      </div>
      <div>
        <TrackListing tracks={tracks} />
      </div>
    </div>
  );
};
