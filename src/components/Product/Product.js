import React from 'react';
import './Product.css';

const Product = (props) => {

    const {name, img, quantity, size, price, time} = props.product || {}

    console.log(props.product);
    return (
        <div className="col-md-4 g-4">
            <div className="card h-100">
                <div className="d-flex justify-content-center p-3">
                <img src= {img} className="card-img-top" style={{"width":"200px", "height": "200px", "border-radius": "50%"}} alt="..."/>
                </div>
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text"><b>Size:</b> {size}</p>
                <p className="card-text"><b>Quantity:</b> {quantity}</p>
                <p className="card-text"><b>Printing Time:</b> {time}</p>
                <p className="card-text"><b>Price:</b> £{price}</p>
            </div>
            <div className="card-footer d-flex justify-content-end">
            <button 
            onClick={()=>props.handleAddProduct(props.product)}
            className="btn btn-primary"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
            </div>
        </div>
    );
};

export default Product;