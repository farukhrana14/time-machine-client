import React, { useState } from "react";
import "./AddProducts.css";
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProducts = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);

    const handleImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'd136f1b08c3a19d44bcad67e010bd23c');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const onSubmit = (data, e) =>{
    const eventData = {
        name: data.productName,
        price: data.price,
        photoURL: imageURL
   };
   const url = `http://localhost:5000/addProduct`;

   fetch(url,{
    method: 'POST', 
    headers: {
    'content-type': 'application/json'
    },
    body: JSON.stringify(eventData)
   })
   .then(res => console.log(res.status))

   e.target.reset();


}

  return (
    <div>
      <h3>Add Products</h3>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="productName" placeholder="Name of Product" ref={register({ required: true })} />
        {errors.name && <span className="error">Product Name is required</span>}
        <br />
        <br/>
        <input name="price" placeholder="Price of Product" ref={register({ required: true })} />
        {errors.name && <span className="error">Price is required</span>}
        <br />
        <br/>
        <input name="inputFile" type="file" onChange={handleImageUpload} ref={register({ required: true })} />
        {errors.name && <span className="error">Price is required</span>}
        <br/>
        {
            imageURL && <input type="submit" />
        }
      </form>
    </div>
  );
};

export default AddProducts;
