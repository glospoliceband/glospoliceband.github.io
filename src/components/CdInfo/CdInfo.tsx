import { CdCover } from "../Images";
import type { TrackInfo } from "./TrackInfo";
import { TrackListing } from "./TrackListing";

export const CdInfo = ({ tracks }: { tracks: TrackInfo[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <CdCover />
      </div>
      <div>
        <TrackListing tracks={tracks} />
      </div>
    </div>
  );
};
