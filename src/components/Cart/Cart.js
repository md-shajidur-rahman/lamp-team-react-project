import React from 'react';

const Cart = (props) => {
    const {cart}= props || {}

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.price;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div>
            <h4>
            <b>Items Added: </b>
              {cart.length}
            </h4>

            <ul>
                {
                    cart.map(product=> <li> {product.name} </li> )
                }
            </ul>
            <h4><b>Total Cost: £ </b>{total}</h4>
        </div>
    );
};

export default Cart;