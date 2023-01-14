import * as React from 'react';

import { StaticImage } from "gatsby-plugin-image"
import { number } from 'prop-types';

export const CdCover = () => (
    <StaticImage
        src='raw/cd_cover.png'
        alt='A Night at the MoviesA Night at the Movies'
    />);
