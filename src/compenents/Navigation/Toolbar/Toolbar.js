import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <div className={classes.Toolbar}>
        <div className={classes.Menu} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </div>
);

export default toolbar;