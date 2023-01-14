import * as React from 'react';
import { useEffect, useState } from 'react';
import { IcTypography } from '@ukic/react';

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

const fetchData = async (setData, setError, setLoading) => {
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

export const EngagementsTable: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData(setData, setError, setLoading);
    }, []);

    if (loading) {
        return (
            <IcTypography variant='body'>Loading ...</IcTypography>
        );
    }

    if (error) {
        return (
            <IcTypography variant='body'>Error: {error}</IcTypography>
        );
    }

    return (
        <table className='engagements-table'>
            <thead>
                <tr className='engagements-table-header'>
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
                {data.map((event: MuzodoEvent) => (
                    <tr className='engagements-table-row' key={event.GUID}>
                        <td className='engagements-table-eventDate'>{event.FormattedDate}</td>
                        <td className='engagements-table-eventStartTime'>{event.FormattedStartTime}</td>
                        <td className='engagements-table-eventEndTime'>{event.FormattedEndTime}</td>
                        <td className='engagements-table-eventName'>{event.Name}</td>
                        <td className='engagements-table-eventAddress'>{event.Address}</td>
                        <td className='engagements-table-eventMapUrl'>{event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
