// External imports
import React from 'react';
import clsx from 'clsx';
import { Link, List, ListItem, ListItemText, Grid, ListItemIcon, Card, CardHeader, CardContent, Typography } from '@material-ui/core';

// Internal imports
import cdcover from '../../img/cd_cover.png';
import {useStyles} from './Styles.js';

export const CdInfo = ({className}) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='A Night at the Movies'
            />
            <CardContent className={classes.content}>
            <Grid container>
                <Grid xs={12} item>
                    <Typography paragraph>
                        The Band of the Gloucestershire Constabulary is pleased to
                       anounce the release of our latest CD, A Night at the Movies.
                    </Typography>
                    <Typography paragraph>
                        The band's new CD invites you to enjoy a night at the movies with a collection of tunes from classic films of the last 70 years.
                    </Typography>
                    <Typography paragraph>
                        The CD costs £5 (UK postage £2) and is available at all of our
					    concerts or please contact us at <Link href="mailto:sales@glospoliceband.org">sales@glospoliceband.org</Link>.
				    </Typography>
                </Grid>
                <Grid xs={12} md={6} item>
                    <img src={cdcover} alt="CD - A Night at the Movies" />
                </Grid>
                <Grid item>
                    <List component="ol">
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>1</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Ben-Hur" secondary="Miklós Rózsa, arranged Darrol Barry" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>2</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="The Mission" secondary="Ennio Morricone, arranged Frank Bernaerts" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>3</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Midway March" secondary="John Williams, arranged Darrol Barry" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>4</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Pirates of the Caribbean" secondary="Mlaus Badelt, arranged John Blanken" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>5</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Singin' in the Rain" secondary="Nacio Herb Brown, arranged Alan Fernie" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>6</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Born Free" secondary="John Barry, arranged Alan Catherall" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>7</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="The Mask of Zorro" secondary="James Horner, arranged Darrol Barry" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>8</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="The Best of Bond" secondary="John Barry &amp; Monty Norman, arranged Darrol Barry" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>9</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="The Lord of the Rings" secondary="Howard Shore, arranged Frank Bernaerts" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>10</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Jurassic Park" secondary="John Willams, arranged Alan Catherall" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>11</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Out of Africa" secondary="John Barry, arranged Darrol Barry" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>12</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Gladiator" secondary="Hans Zimmer, arrange Frank Bernaerts" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>13</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Hymn to the Fallen" secondary="John Willams, arranged Frank Bernaerts" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.trackNumber}>14</ListItemIcon>
                            <ListItemText className={classes.trackDescription} primary="Zulu (The Battle of Rorke's Drift)" secondary="John Barry, arranged Roger Thorne" />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </CardContent>
        </Card>
    );
};