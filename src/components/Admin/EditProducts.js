import React, { useEffect, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenSquare} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

import "./EditProducts.css";

const EditProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const url = "http://localhost:5000/allProducts";
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      <h3>Edit Products </h3>

      <div className="products-table">
        <table>
          <tbody>
            <tr className="table-header">
              <th>Description</th>
              <th className="quantity-column">Quantity</th>
              <th className="price-column">Price</th>
              <th className="action-column">Edit Action</th>
            </tr>
            {

                products && products.map(product => 
                    <tr>
                    <td>{product.name}</td>
                    <td className="quantity-column">1</td>
                    <td className="price-column"> <span>$</span> {product.price}</td>
                    <td><FontAwesomeIcon className="pen-svg" color="#007300" size='2x' icon={faPenSquare}/> <FontAwesomeIcon className="trash-svg" color="#DC143C" size='2x' icon={faTrashAlt}/> </td>
                  </tr>
                )

            }
            
            
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default EditProducts;
