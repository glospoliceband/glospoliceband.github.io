import React from 'react';

import { Link, Typography, Grid, AppBar } from '@material-ui/core';
import find_us_on_facebook from '../../img/FindUs-FB-RGB-Wht-1067.png';
import { useStyles } from './Styles.js';

const Copyright = () => (
    <Typography variant="body1" >
        {'Copyright © '}
        The Band of the Gloucestershire
        {' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <AppBar className={classes.footerAppBar}
                position="static"
            >
                <Grid container direction="row" justify="space-between">
                    <Grid item>
                        <Link href="https://www.facebook.com/glospoliceband">
                            <img src={find_us_on_facebook} alt="Find us on Facebook" height={30} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Copyright />
                    </Grid>
                </Grid>
            </AppBar>
        </footer>
    );
}