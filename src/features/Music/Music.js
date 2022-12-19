// External imports
import React from 'react';
import { Typography, Card, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { tableIcons } from './Icons.js';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Internal imports
import musicDatabase from './Band Library 2017-10-15.json';

const useStyles = makeStyles(theme => ({
    root: {},
    loading: {},
    error: {},
}));

export const musicTableDetailPanel = (music, classes) => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>{music.No}</Avatar>
                }
                subheader={<>
                    <Typography className={classes.musicComposer}>Composer: {music.Composer}</Typography>
                    {music.Arranger && <Typography className={classes.musicArranger}>Arr: {music.Arranger}</Typography>}
                    <Typography className={classes.musicCategory}>Notes: {music.Category}</Typography>
                </>}
            />
        </Card>
    );
};

export const Music = ({className}) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MaterialTable
            columns={[
                {
                    title: 'Number',
                    field: 'No',
                    hidden: isSmallScreen,
                    searchable: false,
                    width: 5,
                },
                {
                    title: 'Title',
                    field: 'Title',
                    hidden: false,
                    searchable: true
                },
                {
                    title: 'Composer',
                    render: rowData => <>
                        <Typography>{rowData.Composer}</Typography>
                        {rowData.Arranger && <Typography className={classes.musicArranger}>Arr: {rowData.Arranger}</Typography>}
                    </>,
                    hidden: isSmallScreen,
                    searchable: false
                },
                { title: 'Notes', field: 'Category', hidden: isSmallScreen, searchable: false },
                { title: 'search-composer', field: 'Composer', hidden: true, searchable: true },
                { title: 'search-arranger', field: 'Arranger', hidden: true, searchable: true },
            ]}
            data={musicDatabase}
            title={<div style={{display:'block', width:'100%'}}>
                <Typography variant='h6'>Music Library</Typography>
                {/*
                <Typography variant='body1' paragraph>The contents of our music library is shown below. This is intended for information only and there is no guarantee that listed music is available or playable.</Typography>
                */}
            </div>}
            icons={tableIcons}
            detailPanel={isSmallScreen && ((rowData) => musicTableDetailPanel(rowData, classes))}
            options={{
                pageSize: 100,
            }}
        />
    );
};