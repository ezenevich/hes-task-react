import React from 'react';
import classes from './Product.module.css';

const Product = (props) => {
    return (
        <div className={classes.productItem} onClick={}>
            <h3 className={classes.productsItemName}
                id={props.prod.id}
                name={props.prod.name}
                min-amount={props.prod.min_amount}
                max-amount={props.prod.max_amount}
                min-term={props.prod.min_term}
                max-term={props.prod.max_term}
                rate={props.prod.rate}
            >
                {props.prod.name}
            </h3>
            <p className={classes.productItemDate}>{props.prod.date}</p>
        </div>
    );
};

export default Product;