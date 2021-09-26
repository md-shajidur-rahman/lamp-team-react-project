import React from 'react';

const Cart = (props) => {
    const {cart}= props || {}

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.contributionValue;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div>
            <div className="card bg-secondary text-white position-fixed top-50 end-0 translate-middle-y">
                <div className="card-body">
                    <h5 className="card-title">
                    <i className="fas fa-users"></i> 
                       <b>Persons Added: </b>
                    <span className="text-warning">{cart.length}</span>
                    </h5>
                    <ul className="card-subtitle mb-2 text-warning">
                    {
                        cart.map(person=> <li> {person.name} </li> )
                    }
                    </ul>
                    <h5 className="card-text">
                        <b>Total Contribution Value:</b> 
                        <span className="text-warning"> £{total}</span>
                        </h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;