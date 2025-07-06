import { EngagementsContents } from "./EngagementsContents";

export const Engagements = () => (
  <>
    <h1>Engagements Calendar</h1>

    <p>
      Our latest concert and events calendar is below, more dates will be added
      as they are booked.
    </p>

    <p>
      Please check back regularly for the latest updates and information and any
      last-minute changes to time/venue.
    </p>

    <EngagementsContents />

    <h2>General Notes</h2>

    <p>
      Timings shown above are for playing, members should arrive at least 30
      minutes earlier to set up.
    </p>

    <p>
      Directions are provided as a rough guide only - the Band will not be held
      responsible for your late arrival, any incidents with angry farmers
      through whose fields you are driving, or for you turning up on the right
      day at the right time but at a venue of the same name in a different part
      of the country.
    </p>
  </>
);
