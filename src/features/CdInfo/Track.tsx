export interface TrackProperties {
  number: number;
  name: string;
  composer: string;
}

export const Track = ({ number, name, composer }: TrackProperties) => (
  <li key={number}>
    <p className="mb-0">{name}</p>
    <p className="text-sm font-light mt-0">{composer}</p>
  </li>
);
