import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        // const url = "http://localhost:5000/allProducts";
        fetch ("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data => setProducts(data))
        
    },[])


    return (
        <div className="row my-10 myHeader-padding">
              
              {
                  products && products.map(product => <Products key={product._id} product={product} />)
              }
        </div>
    );
};

export default Shop;