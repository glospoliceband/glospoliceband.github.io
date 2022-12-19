import React from 'react';
import { ListItem, Grid, Typography } from '@material-ui/core';

export const LinksItem = ({ title, children }) => {
    return (
        <ListItem>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" components="h4">{title}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {children}
                </Grid>
            </Grid>
        </ListItem>
    );
};