import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    return (
        <div className = "shop-container">
            <div className = "product-container">
                <ul>
                    {
                        first10.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className = "cart-container">
                <h2>This is sopping cart</h2>
            </div>
            
        </div>
    );
};

export default Shop;