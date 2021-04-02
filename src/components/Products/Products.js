import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';


const Products = (props) => {

    const {name, photoURL, price, _id} = props.product;


    return (
        <div className="col-md-4 mb-4 my-card">
            <div className="card text-center">
                <img src={photoURL} alt=""  className="card-img-top"/>
                <div className="card-body">
                <h5> {name} </h5>
                <span><strong>Price:  ${price} </strong> </span>
                <Link to={`/orders/`+_id}><button className="btn btn-success">Buy Now</button></Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Products;