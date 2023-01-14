import * as React from 'react';

import { IcTypography } from '@ukic/react';

import { CdCover } from '../images/CdCover';

interface TrackProps {
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
            <IcTypography variant='body' className='cdinfo-track-name'>{name}</IcTypography>
            <IcTypography variant='body' className='cdinfo-track-composer'>{composer}</IcTypography>
        </li>
    );
}

const TrackListing = ({ tracks }: TracksProps) => {
    return (
        <ol>
            {tracks.map((track) => (
                <Track number={track.number} name={track.name} composer={track.composer} />
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