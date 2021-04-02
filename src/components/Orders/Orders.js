import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const [preOrder, setPreOrder] = useState();
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  
  useEffect(() => {
  
    if(id) {
      fetch("http://localhost:5000/orders/" + id)
      .then((res) => res.json())
      .then((data) => setPreOrder(data));
    }
    
  }, [id])
  


  return (
    <div>
      <h3>Place Order</h3>
      {
        preOrder ?  
        <div className="main-order-div">
        <div className="order-image-div">
          <img src={preOrder.photoURL} alt="" />
        </div>

        <div className="my-table">
          <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th className="quantity-column">Quantity</th>
              <th className="price-column">Price</th>
            </tr>
            <tr>
              <td>{preOrder.name}</td>
              <td className="quantity-column">1</td>
              <td className="price-column">{preOrder.price}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="quantity-column"></td>
              <td className="price-column">{preOrder.price}</td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
              
              </tr>
            </tfoot>
          </table>
          <br />
          <Link to={{pathname: "/shipment", state: {preOrder}}}><button className="btn btn-primary">Place Order</button></Link>
          <span> </span>
          <span> </span>
          <Link to="/"><button className="btn btn-primary">Cancel Order</button></Link>
        </div>
        
      </div>
       : loggedInUser.email ? <div className='not-signed-in-div'> <h3>Please Select Products to Order.</h3> </div> : <div className='not-signed-in-div'> <h3>Please Sign in and Select Products to Order.</h3> </div> } 
    </div>
  );
};

export default Orders;
