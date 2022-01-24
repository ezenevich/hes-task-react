import React, {useState} from 'react';
import classes from './Box.module.css';
import {clearProduct} from "../../../utils/products";
import BlackButton from "../button/BlackButton";
import Scroll from "../scroll/Scroll";
import ProductsList from "../List/ProductsList";
import loanProductsData from "../../../content/loanProducts.json";


const ProductsBox = () => {
    let productsList = [];

    if (loanProductsData) {
        productsList = [...loanProductsData];
    }

    let [products, setProducts] = useState([...productsList]);


    return (
        <div className={classes.productsBox}>
            <div className={classes.createProduct}>
                <BlackButton onClick={clearProduct}>
                    Создать продукт
                </BlackButton>
            </div>

            <Scroll>
                <ProductsList
                    products = {products}
                />
            </Scroll>

        </div>
    );
};

export default ProductsBox;