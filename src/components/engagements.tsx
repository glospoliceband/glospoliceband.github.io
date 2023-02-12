import { Disclosure } from '@headlessui/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { Typography } from './typography';

interface MuzodoEvent {
    GUID: string;
    Name: string;
    Confirmed: 0 | 1;
    Cancelled: 0 | 1;
    EventType: 'PUBLIC' | 'PRIVATE' | 'REHEARSAL' | 'MEETING';
    Address: string;
    MapUrl: string;
    FormattedDate: string;
    FormattedArriveTime: string;
    FormattedStartTime: string;
    FormattedEndTime: string;
    CreateDateTime: Date;
};

const fetchData = async (setData: (data: MuzodoEvent) => void, setError: (error: string) => void, setLoading: (loading: boolean) => void) => {
    fetch("https://www.muzodo.com/api/v1/group/BA71404D-C196-A266-2BBF-0A6C705FDB4C/events?displayFrom")
        .then(res => res.json())
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
        )
};

interface EngagementsTableProperties {
    engagements: MuzodoEvent[];
};

const EngagementsTable = ({ engagements }: EngagementsTableProperties) => (
    <table className='table-auto'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Name</th>
                <th>Address</th>
                <th>Map Link</th>
                <th>Notes</th>
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
                    <td >{event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const EngagementsList = ({ engagements }: EngagementsTableProperties) => (
    <ul>
        {engagements.map((event: MuzodoEvent) => (
            <li>
                <Disclosure>
                    <Disclosure.Button className="py-2">
                        {event.FormattedDate} - {event.Name}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <p>{event.FormattedStartTime} - {event.FormattedEndTime}</p>
                        <p>{event.Address}</p>
                        <p>{event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}</p>
                    </Disclosure.Panel>
                </Disclosure>
            </li>
        ))}
    </ul>
);

export const Engagements: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData(setData, setError, setLoading);
    }, []);

    if (loading) {
        return (
            <Typography variant='body'>Loading ...</Typography>
        );
    }

    if (error) {
        return (
            <Typography variant='body'>Error: {error}</Typography>
        );
    }

    return (
        <>
            <div className='block md:hidden'>
                <EngagementsList engagements={data} />
            </div>
            <div className='hidden md:block'>
                <EngagementsTable engagements={data} />
            </div>
        </>
    );
};
