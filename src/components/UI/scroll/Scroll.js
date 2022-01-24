import React from 'react';
import classes from './Scroll.module.css';

const Scroll = ({children}) => {
    return (
        <div className={classes.scroll}>
            {children}
        </div>
    );
};

export default Scroll;