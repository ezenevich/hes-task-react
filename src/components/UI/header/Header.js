import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <span className={classes.header__logo}>Super<strong>Bank</strong></span>
        </header>
    );
};

export default Header;