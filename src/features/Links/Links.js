// External imports
import React from 'react';
import clsx from 'clsx';
import { Link, List, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// Internal imports
import { LinksItem } from './LinksItem.js';
import {useStyles} from './Styles.js';

export const Links = ({className}) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='Links'
                subheader='The links below will take you to the websites of organisations and people with a close connection to The Band of the Gloucestershire Constabulary.'
            />
            <CardContent className={classes.content}>
            <List>
                <LinksItem title='Gloucestershire Constabulary'>
                    <Typography paragraph>The Gloucestershire Constabulary website</Typography>
                    <Link href="http://www.gloucestershire.police.uk">www.gloucestershire.police.uk</Link>
                </LinksItem>
                <LinksItem title='National Association of Retired Police Officers'>
                    <Typography paragraph>NARPO - Gloucestershire Branch</Typography>
                    <Link href="http://www.narpo-glos.org.uk">www.narpo-glos.org.uk</Link>
                    <Typography paragraph>NARPO - Avon &amp; Somerset Branch</Typography>
                    <Link href="http://www.asnarpo.org">www.asnarpo.org</Link>
                </LinksItem>
                <LinksItem title='Matt Kingston'>
                    <Typography paragraph>
                        Matt Kingston - arranger and composer of brass band music,
                        and one-time front row cornet player for the Band!
                        We are very proud to have premiered some of Matt's unique arrangements
                        and suggest you check out his websites for some stunning additions to your band's repertoire.
                    </Typography>
                    <Link href="http://www.bigshinybrass.com">www.bigshinybrass.com</Link>
                    <Link href="http://www.mattkingston.com">www.mattkingston.com</Link>
                </LinksItem>
                <LinksItem title='Gloucestershire Brass Band Association'>
                    <Typography paragraph>The website of the Gloucestershire Brass Band Association</Typography>
                    <Link href="http://www.gbba-online.org.uk">www.gbba-online.org.uk</Link>
                </LinksItem>
            </List>
            <Typography paragraph>
                <em>The BOTGC is not responsible for the content of external internet sites.</em>
            </Typography>
            </CardContent>
        </Card>
    );
};

