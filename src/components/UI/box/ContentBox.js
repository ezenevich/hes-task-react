import React from 'react';
import classes from './Box.module.css';
import ProductsBox from "./ProductsBox";

const ContentBox = () => {
    return (
        <div className={classes.contentBox}>
            <ProductsBox/>
        </div>
    );
};

export default ContentBox;