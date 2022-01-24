import React from 'react';
import classes from './ProductsList.module.css';
import Product from "../Product/Product";



const ProductsList = ({products}) => {

    if(!products.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                404 - posts not found
            </h1>
        )
    }


    return (
        <div className={classes.productsList}>
            {products.map((prod) =>

                     <Product
                         key = {prod.id}
                         prod = {prod}
                     />
            )}
        </div>
    );
};

export default ProductsList;