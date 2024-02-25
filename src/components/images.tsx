import * as React from "react";

import Image from "next/image";

import CdCoverSrc from "@/images/cd_cover.png";
import FindUsOnFacebookSrc from "@/images/FindUs-FB-RGB-Wht.svg";
import GlosPoliceBandSrc from "@/images/glospoliceband_cheltenham_20161114.jpg";

export const CdCover = () => <Image src={CdCoverSrc} alt="CD Cover" width={456} height={444}/>;

export const FindUsOnFacebook = () => (
  <Image src={FindUsOnFacebookSrc} alt="Find Us on Facebook" width={157} height={30} />
);

export const GlosPoliceBand = () => (
  <Image
    src={GlosPoliceBandSrc}
    alt="The Band of the Gloucestershire Constabulary, Cheltenham 14/11/2016"
    width={1828}
    height={1261}
  />
);
