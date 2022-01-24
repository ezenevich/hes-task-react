import React from 'react';
import classes from './Box.module.css';
import {clearProduct} from "../../utils/products";
import BlackButton from "../button/BlackButton";





const ProductsBox = () => {
    return (
        <div className={classes.productsBox}>
            <div className={classes.createProduct}>
                <BlackButton onClick={clearProduct}>
                    Создать продукт
                </BlackButton>
            </div>

            <div className="productsBoxScroll">
                <div className="productsList">

                </div>
            </div>

        </div>
    );
};

export default ProductsBox;