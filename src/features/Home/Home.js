// External imports
import React from 'react';
import clsx from 'clsx';
import { Typography, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';

// Internal imports
import glospoliceband_cheltenham_20161114 from '../../img/glospoliceband_cheltenham_20161114.jpg';
import { useStyles } from './Styles.js';

export const Home = ({className}) => {
    const classes = useStyles();
    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='The Band of the Gloucestershire Constabulary'
                subheader='Welcome to website of The Band of the Gloucestershire Constabulary.'
            />
            <CardMedia className={classes.media}
                image={glospoliceband_cheltenham_20161114}
                title='Band of the Gloucestershire Constabulary'
            />
            <CardContent className={classes.content}>
            <Typography paragraph>
                    The Band of the Gloucestershire Constabulary was formed on March 1st
                    1990 and is comprised of serving and retired members of the regular
                    Force, Specials, civilian staff and members of their families,
                    together with a handful of musicians best described as &quot;known to
                    the police&quot;.
                    </Typography>
                <Typography >
                    We are privileged to have performed at some of the county's most
                    prestigious venues - Gloucester Cathedral and Highgrove House,
                    Cheltenham Race Course, Gatcombe Park and Kingsholm, on ceremonial
                    duty for St. George's Day and Remembrance Day, and at local events
                    such as the Royal International Air Tattoo. Regular fixtures are
                    Sunday afternoon "Bands in the Park" concerts throughout our beautiful
                    county and beyond, and traditional Christmas Carols on our High
                    Streets.
                    </Typography>
                <Typography paragraph>
                    Several radio broadcasts, together with tours to France, Germany,
                    Luxembourg and Holland have assured a wide audience and the Band is
                    firmly established on the county's charity concert circuit - we are
                    proud to have performed for many charities and support organisations,
                    proceeds from concerts are reckoned to be well in excess of
                    &pound;100,000.
                </Typography>
                <Typography paragraph>
                    The Band is non-competing and is always open to new players and
                    visitors - you don't have to be a police officer to join us! We
                    practise in Cheltenham on a Thursday night - for more information
                    please see our <a href="contacts.php">contacts</a> page.
                </Typography>
                <Typography>
                    Our recent CD is still available, <a href="cd_info.php">A Night at the
                    Movies</a>
                </Typography>
            </CardContent>
        </Card>
    );
};
