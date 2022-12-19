// External imports
import React from 'react';
import { Container } from '@material-ui/core';

// Internal imports
import { Routes } from './Routes.js';
import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { useStyles } from './Styles.js';

export const GlosPoliceBand = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Header />
            <Container className={classes.container}>
                <Routes className={classes.page}/>
            </Container>
            <Footer />
        </Container>
    );
}