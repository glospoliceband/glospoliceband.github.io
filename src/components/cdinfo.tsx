import * as React from 'react';

import { CdCover } from './images';

import { Typography} from './typography';

interface TrackProps {
    key: number;
    number: number;
    name: string;
    composer: string;
};

interface TracksProps {
    tracks: TrackProps[];
}


const Track = ({ number, name, composer }: TrackProps) => {
    return (
        <li key={number}>
            <Typography variant='body' className='cdinfo-track-name'>{name}</Typography>
            <Typography variant='body' className='cdinfo-track-composer'>{composer}</Typography>
        </li>
    );
}

const TrackListing = ({ tracks }: TracksProps) => {
    return (
        <ol>
            {tracks.map((track, key) => (
                <Track key={key} number={track.number} name={track.name} composer={track.composer} />
            ))}
        </ol>
    );
}

export const CdInfo = ({ tracks }: TracksProps) => (
    <div className='cdinfo-container'>
        <div className='cdinfo-picture'>
            <CdCover />
        </div>
        <div className='cdinfo-tracks'>
            <TrackListing tracks={tracks} />
        </div>
    </div>
);