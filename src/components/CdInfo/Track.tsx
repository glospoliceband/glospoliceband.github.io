import type { TrackInfo } from "./TrackInfo";

export const Track = ({ number, name, composer }: TrackInfo) => {
  return (
    <li key={number}>
      <p className="mb-0">{name}</p>
      <p className="text-sm font-light mt-0">{composer}</p>
    </li>
  );
};
