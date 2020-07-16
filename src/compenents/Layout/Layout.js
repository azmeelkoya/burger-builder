import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SiderDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    render () {
        return (
            <Aux>
                <Toolbar clicked={this.sideDrawerOpenHandler}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}
    

export default Layout;

