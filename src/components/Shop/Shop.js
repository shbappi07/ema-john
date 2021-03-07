import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log("Product added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className = "shop-container">
            <div className = "product-container">
                <ul>
                    {
                        first10.map(product => <Products handleAddProduct = {handleAddProduct} product = {product}></Products>)
                    }
                </ul>
            </div>
            <div className = "cart-container">
                <Cart cart = {cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;