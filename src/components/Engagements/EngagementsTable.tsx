import type { MuzodoEvent } from "./MuzodoEvent";
import type { EngagementsTableProperties } from "./EngagementsTableProperties";

export const EngagementsTable = ({
  engagements,
}: EngagementsTableProperties) => (
  <table className="table-auto">
    <thead>
      <tr>
        <th>Date</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Name</th>
        <th>Address</th>
        <th>Map Link</th>
      </tr>
    </thead>
    <tbody>
      {engagements.map((event: MuzodoEvent) => (
        <tr key={event.GUID}>
          <td>{event.FormattedDate}</td>
          <td>{event.FormattedStartTime}</td>
          <td>{event.FormattedEndTime}</td>
          <td>{event.Name}</td>
          <td>{event.Address}</td>
          <td>{event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
