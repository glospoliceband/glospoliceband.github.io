// External imports
import React from 'react';
import clsx from 'clsx';
import { Link, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Internal imports
import policeBox from '../../img/police-box.png';
import facebook from '../../img/FB-f-Logo__blue_72.png';
import twitter from '../../img/twitter-bird-blue-on-white.png';

const useStyles = makeStyles(theme => ({
    root: {},
}));

export const Contacts = ({className}) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)}>
            <CardHeader className={classes.header}
                title='Contact Us'
            />
            <CardContent className={classes.content}>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={policeBox} alt="Contact Us" />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography paragraph>
                            For more infomation about the Band or to make a booking enquiry, please contact us at <Link href="mailto:secretary@glospoliceband.org">secretary@glospoliceband.org</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="inset" components="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={facebook} alt="Facebook" />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography paragraph>
                            Find us on Facebook: <Link href="https://www.facebook.com/glospoliceband">https://www.facebook.com/glospoliceband</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="inset" components="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={twitter} alt="Twitter" />
                    </ListItemAvatar>
                    <ListItemText>
                        <Typography paragraph>
                            Follow us on Twitter: <Link href="https://twitter.com/GlosPoliceBand">https://twitter.com/GlosPoliceBand</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
                <Divider variant="inset" components="li" />
                <ListItem>
                    <ListItemText>
                        <Typography paragraph>
                            Comments or issues with this website please contact <Link href="mailto:webadmin@glospoliceband.org">webadmin@glospoliceband.org</Link>
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
            </CardContent>
        </Card>
    );
};
