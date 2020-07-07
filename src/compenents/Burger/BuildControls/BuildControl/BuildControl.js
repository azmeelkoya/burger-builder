import React from 'react';

import classes from './BuildControl.module.css';



const buildControl = (props) => {

    const moreClicked = () => {
        return
    };

    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.remove}>Less</button>
            <button className={classes.More} onClick={() => moreClicked()}>More</button>
        </div>
    );
    
};

export default buildControl;