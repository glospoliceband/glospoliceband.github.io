import Image from "next/image";
import CdCoverSrc from "@/images/cd_cover.png";

export const CdCover = () => (
  <Image src={CdCoverSrc} alt="CD Cover" width={456} height={444} />
);
