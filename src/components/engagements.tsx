import { Disclosure } from "@headlessui/react";
import React from "react";
import { useEffect, useState } from "react";

interface MuzodoEvent {
  GUID: string;
  Name: string;
  Confirmed: 0 | 1;
  Cancelled: 0 | 1;
  EventType: "PUBLIC" | "PRIVATE" | "REHEARSAL" | "MEETING";
  Address: string;
  MapUrl: string;
  FormattedDate: string;
  FormattedArriveTime: string;
  FormattedStartTime: string;
  FormattedEndTime: string;
  CreateDateTime: Date;
}

const fetchData = async (
  setData: (data: MuzodoEvent[]) => void,
  setError: (error: string) => void,
  setLoading: (loading: boolean) => void
) => {
  fetch(
    `https://www.muzodo.com/api/v1/group/BA71404D-C196-A266-2BBF-0A6C705FDB4C/events?displayFrom`
  )
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.Status) {
          setError(result.Message);
          setLoading(false);
        } else {
          setData(result);
          setLoading(false);
        }
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setError(error);
        setLoading(false);
      }
    );
};

interface EngagementsTableProperties {
  engagements: MuzodoEvent[];
}

const EngagementsTable = ({ engagements }: EngagementsTableProperties) => (
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

const EngagementsList = ({ engagements }: EngagementsTableProperties) => (
  <ul className="list-none">
    {engagements.map((event: MuzodoEvent) => (
      <li>
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

export const Engagements = () => {
  const [data, setData] = useState([] as MuzodoEvent[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(setData, setError, setLoading);
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="block md:hidden">
        <EngagementsList engagements={data} />
      </div>
      <div className="hidden md:block">
        <EngagementsTable engagements={data} />
      </div>
    </>
  );
};
