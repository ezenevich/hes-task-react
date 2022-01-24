import {getElemByClass} from "./utils";

export const clearProduct = () => {
    let lastActiveItem = getElemByClass("products-list-item_active").item(0);
    if(lastActiveItem){
        lastActiveItem.className = "products-list-item";
    }

    let productData = getElemByClass('product-description__input_field');
    for(let i = 0; i < productData.length; i++) {
        productData[i].value = '';
    }

    getElemByClass("product-description__header").item(0).innerHTML = "Редактирование: ";
}
