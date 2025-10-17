import { CdCover } from "../Images";

import { CdBlurb } from "./CdBlurb";
import { TrackListing } from "./TrackListing";

export const CdInfo = () => {
  return (
    <>
      <h1>A Night at the Movies</h1>
      <CdBlurb />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <CdCover />
        </div>
        <div>
          <TrackListing />
        </div>
      </div>
    </>
  );
};
