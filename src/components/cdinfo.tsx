import * as React from 'react';

import { StaticImage } from "gatsby-plugin-image"

import { IcTypography } from '@ukic/react';

import { Layout } from './layout';

const MainPicture = () => (<StaticImage src='../images/cd_cover.png' alt='A Night at the MoviesA Night at the Movies' />);

const Track = ({ number, track }) => {
    return (
        <li key={number}>{track.name} : {track.composer}</li>
    );
}

const TrackListing = ({ tracks }) => {
    return (
        <ol>
            {tracks.map((track, key) => (
                <Track number={key} track={track} />
                // <li key={key}><IcTypography variant='body'>{track.name} : {track.composer}</IcTypography></li>
                // <IcTypography variant='body'>{key} - {track.name} : {track.composer}</IcTypography>
                ))}
        </ol>
        );
}

export const CdInfo = ({ children, pageContext }) => {
    const tracks = pageContext.frontmatter.tracks;

    return (
        <Layout pageContext={pageContext} >
            <div className='cdinfo-container'>
                <div className='cdinfo-description'>
                    {children}
                </div>
                <div className='cdinfo-picture'>
                    <MainPicture />
                </div>
                <div className='cdinfo-tracks'>
                    <TrackListing tracks={tracks} />
                </div>
            </div>
        </Layout>
    );
}