import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import "./Shipment.css";

const Shipment = (data) => {
  const { register, handleSubmit, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const orderProduct = location.state.preOrder;
 


  const onSubmit = (data) => {
    const orderDetails = {customer: {...loggedInUser}, products: {...orderProduct}, shipment: data, orderTime: new Date() }
    
    fetch('https://time-machine-2021.herokuapp.com/addOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(orderDetails)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            alert('Thank you, your order is confirmed.')
            history.push('/')

        }
    })

};

  return (
    <div className="container shipment-main-div">
      <div className="shipment-left col-md-4">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name"/>
          {errors.name && <span className="error">Name is required</span>}
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email"/>
          {errors.email && <span className="error">Email is required</span>}
          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number"/>
          {errors.phone && (<span className="error">Phone Number is required</span>)}
          <input name="address" ref={register({ required: true })} placeholder="Your Postal Address"/>
          {errors.address && <span className="error">Address is required</span>}
          <input name="country" ref={register({ required: true })} placeholder="Country"/>
          {errors.country && <span className="error">Country is required</span>}
          <input type="submit" value="Check Out" />
        </form>
      </div>
      <div className="shipment-right col-md-8">
          <h3>Thank you!</h3>
      </div>
    </div>
  );
};

export default Shipment;
