import React from 'react';
import { AppBar, Toolbar, Typography, Box, Link } from '@material-ui/core';

import botgc_banner_plain from '../../img/botgc-banner-plain.png';
import { NavigationMenu } from './NavigationMenu.js';
import { useStyles } from './Styles.js';

export const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Box className={classes.headerBanner}>
                <Link href="/">
                    <img
                        src={botgc_banner_plain}
                        alt="Band of the Gloucestershire Constabulary"
                    /></Link>
            </Box>
            <AppBar
                position="static"
                className={classes.headerAppBar}
            >
                <Toolbar>
                    <NavigationMenu />
                    <Typography className={classes.title} variant="h5" component="h1">
                        The Band of the Gloucestershire Constabulary
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    );
}
