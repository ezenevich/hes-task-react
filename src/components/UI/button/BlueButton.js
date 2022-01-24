import React from 'react';
import classes from './Button.module.css';

const BlackButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.blueBtn}>
            {children}
        </button>
    );
};

export default BlackButton;