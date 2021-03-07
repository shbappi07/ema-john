import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
       // console.log(props);
    const {img, name, seller,price, stock} = props.product;
    return (
        <div className = "product">
            <div>
            <img src={img} alt=""/>

            </div>
            <div className = "product-info-style">
                <h3 className = "product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <br/>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick = {() => props.handleAddProduct(props.product)} className = "shop-card-btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
            
        </div>
    );
};

export default Products;