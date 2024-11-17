import Image from "next/image";

import GlosPoliceBandSrc from "@/images/glospoliceband_cheltenham_20161114.jpg";

export const GlosPoliceBand = () => (
  <Image
    src={GlosPoliceBandSrc}
    alt="The Gloucestershire Police Band, Cheltenham 14/11/2016"
    width={1828}
    height={1261}
  />
);
