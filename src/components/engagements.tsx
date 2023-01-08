import * as React from 'react';
import { useEffect, useState } from 'react';
import { IcTypography } from '@ukic/react';

import { Layout } from './layout';

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


const EngagementsTable = ({ data, loading, error }) => {
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
            <tr className='engagements-table-header'>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Name</th>
                <th>Address</th>
                <th>Map Link</th>
                <th>Notes</th>
            </tr>
            {data.map((event) => (
                <tr className='engagements-table-row' key={event.GUID}>
                    <td className='engagements-table-eventDate'>{event.FormattedDate}</td>
                    <td className='engagements-table-eventStartTime'>{event.FormattedStartTime}</td>
                    <td className='engagements-table-eventEndTime'>{event.FormattedEndTime}</td>
                    <td className='engagements-table-eventName'>{event.Name}</td>
                    <td className='engagements-table-eventAddress'>{event.Address}</td>
                    <td className='engagements-table-eventMapUrl'>{event.MapUrl && <a href={event.MapUrl}>{event.MapUrl}</a>}</td>
                    <td className='engagements-table-eventNotes'>TBD</td>
                </tr>
            ))}
        </table>
    );
};

export const Engagements = ({ children, pageContext }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData(setData, setError, setLoading);
    }, []);

    return (
        <Layout pageContext={pageContext} >
            <div className='engagements-container'>
                <div className='engagements-description'>
                    {children}
                </div>
                <div className='engagements-table'>
                    <EngagementsTable data={data} error={error} loading={loading} />
                </div>
            </div>
        </Layout>
    );
}
