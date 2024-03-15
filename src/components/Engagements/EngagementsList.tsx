import type { MuzodoEvent } from "./MuzodoEvent";
import type { EngagementsTableProperties } from "./EngagementsTableProperties";

export const EngagementsList = ({
  engagements,
}: EngagementsTableProperties) => (
  <ul className="list-none">
    {engagements.map((event: MuzodoEvent) => (
      <li key={event.GUID}>
        <h2 className="text-sm">
          {event.FormattedDate} - {event.Name}
        </h2>
        <p className="text-sm">
          {event.FormattedStartTime} - {event.FormattedEndTime}
        </p>
        <p className="text-sm">{event.Address}</p>
        <p className="text-sm">
          {event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}
        </p>
      </li>
    ))}
  </ul>
);
