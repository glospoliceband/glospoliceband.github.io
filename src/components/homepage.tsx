import * as React from 'react';

import { StaticImage } from "gatsby-plugin-image"

import { IcTypography } from '@ukic/react';

import { Layout } from './layout';

const MainPicture = () => (
    <StaticImage
        src='../images/glospoliceband_cheltenham_20161114.jpg'
        alt='The Band of the Gloucestershire Constabulary at Cheltenham Festival of Rememberance, 2016'
    />);

export const Homepage = ({ children, pageContext }) => {
    return (
        <Layout pageContext={pageContext} >
            <div className='homepage-container'>
                <div className='homepage-picture'>
                    <MainPicture />
                </div>
                <div className='homepage-content'>
                    {children}
                </div>
            </div>
        </Layout>
    );
}