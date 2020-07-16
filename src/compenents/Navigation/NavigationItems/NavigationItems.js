import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <div className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </div>
);

export default navigationItems;