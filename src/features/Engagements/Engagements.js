// External imports
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Table, TableHead, TableBody, TableRow, TableCell, Link, Typography, Card, CardHeader, CardContent } from '@material-ui/core';
import {useStyles} from './Styles.js';

const EngagementsTable = ({ data, loading, error }) => {
    const classes = useStyles();
    if (loading) {
        return (
            <Typography paragraph className={classes.loading}>Loading ...</Typography>
        );
    }

    if (error) {
        return (
            <Typography paragraph className={classes.error}>Error: {error}</Typography>
        );
    }

    return (
        <Table className={classes.eventTable}>
            <TableHead>
                <TableRow className={classes.eventTableHeader}>
                    <TableCell>Date</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>End Time</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Map Link</TableCell>
                    <TableCell>Notes</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((event) => (
                    <TableRow className={classes.eventRow} key={event.GUID}>
                        <TableCell className={classes.eventDate}>{event.FormattedDate}</TableCell>
                        <TableCell className={classes.eventStartTime}>{event.FormattedStartTime}</TableCell>
                        <TableCell className={classes.eventEndTime}>{event.FormattedEndTime}</TableCell>
                        <TableCell className={classes.eventName}>{event.Name}</TableCell>
                        <TableCell className={classes.eventAddress}>{event.Address}</TableCell>
                <TableCell className={classes.eventMapUrl}>{event.MapUrl && <Link href={event.MapUrl}>{event.MapUrl}</Link>}</TableCell>
                        <TableCell className={classes.eventNotes}>TBD</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const fetchData = async (setData, setError, setLoading) => {
    fetch("https://www.muzodo.com/api/v1/group/BA71404D-C196-A266-2BBF-0A6C705FDB4C/events")
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

export const Engagements = ({className}) => {
    const classes = useStyles();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData(setData, setError, setLoading);
    }, []);

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='Concert Calendar'
            />
            <CardContent className={classes.content}>
            <Typography paragraph>
                Our latest concert and events calendar is below, but we will add
                more dates as they are booked.
            </Typography>
            <Typography paragraph>
                Please check back regularly for the latest updates and
                information and any last-minute changes to time/venue. Directions
                will be posted during the week prior to the event. Please read the
                notes at the foot of the page!
            </Typography>
            <EngagementsTable
                data={data}
                loading={loading}
                error={error} />
            <Typography variant='h5' component='h3'>General Notes</Typography>
            <Typography paragraph>
                Timings shown above are for playing, members should arrive at
				least 30 minutes earlier to set up.
            </Typography>
            <Typography paragraph>
                All timings for concerts marked with * are <strong>provisional</strong>
                - please check back nearer the date for confirmation.
            </Typography>
            <Typography paragraph>
                For more information about <strong>&quot;Bands in the Park&quot;</strong>
                please see <Link href="http://www.bandsinthepark.org.uk"
                    title="Bands in the Park" target="_blank">www.bandsinthepark.org.uk</Link>
            </Typography>
            <Typography paragraph>
                <strong>Directions</strong> are provided as a rough guide only - the
                Band will not be held responsible for your late arrival, any
                incidents with angry farmers through whose fields you are driving,
                or for you turning up on the right day at the right time but at a
				venue of the same name in a different part of the country...
            </Typography>
            </CardContent>
        </Card>
    );
};