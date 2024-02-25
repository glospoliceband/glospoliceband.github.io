import * as React from "react";

import Image from "next/image";

import CdCoverSrc from "@/images/cd_cover.png";
import FindUsOnFacebookSrc from "@/images/FindUs-FB-RGB-Wht.svg";
import GlosPoliceBandSrc from "@/images/glospoliceband_cheltenham_20161114.jpg";
import BotgcBannerSrc from "@/images/botgc-banner-plain.png";

export const CdCover = () => <Image src={CdCoverSrc} alt="CD Cover" />;

export const FindUsOnFacebook = () => (
  <Image src={FindUsOnFacebookSrc} alt="Find Us on Facebook" height={30} />
);

export const GlosPoliceBand = () => (
  <Image
    src={GlosPoliceBandSrc}
    alt="The Band of the Gloucestershire Constabulary, Cheltenham 14/11/2016"
  />
);

export const BotgcBanner = () => (
  <Image
    src={BotgcBannerSrc}
    alt="The Band of the Gloucestershire Constabulary"
  />
);
