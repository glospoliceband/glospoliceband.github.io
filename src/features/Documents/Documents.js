import React from 'react';
import clsx from 'clsx';
import { List, ListItem, Link, CardContent, Card, CardHeader } from '@material-ui/core';
import { useStyles } from './Styles.js';

// Internal imports
import constitution from './docs/tbotgc_constitution.pdf';
import information from './docs/members_information.pdf';

export const Documents = ({className}) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='Documents'
                subheader='The following documents are available for information.'
            />
            <CardContent className={classes.content}>
                <List>
                    <ListItem>
                        <Link href={constitution} target="_blank" variant='body1'>Band Constitution</Link>
                    </ListItem>
                    <ListItem>
                        <Link href={information} target="_blank" variant='body1'>Information for Band Members</Link>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};