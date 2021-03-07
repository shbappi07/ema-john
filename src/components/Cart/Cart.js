import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce((total, prd)=> total+prd.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 35){
        shipping = 4.99;
    }else if(total > 15){
        shipping = 12;
    }

    const tax = total*.1;
    const grandTotal = total+shipping+tax;

    const formatNumber = num => {
        const precission = num.toFixed(2);
        return Number(precission);
    }

    return (
        <div>
            <h4>This is cart: {cart.length}</h4>
            <p><small>Product Price: ${formatNumber(total)}</small></p>
            <p><small>Shipping Cost: ${shipping}</small></p>
            <p><small>Tax+ Vat: ${formatNumber(tax)}</small></p>
            <p>Total Price: ${formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;