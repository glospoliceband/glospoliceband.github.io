import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

import { useStyles } from './Styles.js';

export const NavigationMenu = () => {
    const classes = useStyles();

    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [membersAnchorEl, setMembersAnchorEl] = useState(false);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
        setMembersAnchorEl(null);
    };

    const handleMembersClick = (event) => {
        setMembersAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.dropDownMenu}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenuClick}>
                <MenuIcon />
            </IconButton>

            <Menu
                id='main-menu'
                anchorEl={menuAnchorEl}
                keepMounted
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/'>About</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/engagements'>Engagements</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/links'>Links</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/contacts'>Contacts</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/cdinfo'>CD Info</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleMembersClick}>
                    <ListItemText primary="Members" />
                    {Boolean(membersAnchorEl) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </MenuItem>
                <Menu
                    id='members-menu'
                    anchorEl={membersAnchorEl}
                    keepMounted
                    open={Boolean(membersAnchorEl)}
                    onClose={handleMenuClose}>
                    <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/documents'>Documents</MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleMenuClose} component={Link} to='/music'>Music</MenuItem>
                </Menu>
            </Menu>
        </div>
    );
}
