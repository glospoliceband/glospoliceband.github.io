import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

export const CdCover = () => (
  <StaticImage src="../images/cd_cover.png" alt="CD Cover" />
);

export const FindUsOnFacebook = () => (
  <StaticImage
    src="../images/FindUs-FB-RGB-Wht.svg"
    alt="Find Us on Facebook"
    height={30}
  />
);

export const GlosPoliceBand = () => (
  <StaticImage
    src="../images/glospoliceband_cheltenham_20161114.jpg"
    alt="The Band of the Gloucestershire Constabulary, Cheltenham 14/11/2016"
  />
);

export const BotgcBanner = () => (
  <StaticImage
    src="../images/botgc-banner-plain.png"
    alt="The Band of the Gloucestershire Constabulary"
  />
);
