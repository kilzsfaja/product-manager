import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
  // setting state for inputs from db
  const [products, setProducts] = useState([]);
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState("");


  // get the data right away
  useEffect(() => {
    // make the call to the server
    axios
      .get("http://localhost:8000/api/product")
      .then((serverRes) => {
        // ! always clog the server response
        console.log("✅ SERVER SUCCESS => ", serverRes.data.Products);
        setProducts(serverRes.data.Products);
      })
      .catch((err) => {
        console.log("❌ SERVER ERROR", err);
      });
  }, []);

  // --------- delete function --------------
  const deleteProduct = (prodId) => {
    console.log("delete", prodId);
    axios
      .delete("http://localhost:8000/api/product/" + prodId)
      .then((serverResponse) => {
        console.log(serverResponse.data);
        const updatedProducts = products.filter((prod) => prod._id !== prodId);
        setProducts(updatedProducts);
      })
      .catch((serverError) => console.log(serverError));
  };

  return (
    <>
      <fieldset>
        <legend>DisplayAll.jsx</legend>
        <h2>All Products</h2>
        {products.map((prod) => {
          return (
            <div key={prod._id}>
              <Link to={`/products/${prod._id}`}>
                <h3>{prod.title}</h3>
              </Link>
              <Link to={`/products/${prod._id}/edit`}>
                <p>Edit</p>
              </Link>
              <button onClick={() => deleteProduct(prod._id)}>DELETE</button>
              <hr />
            </div>
          );
        })}
      </fieldset>
    </>
  );
};

export default DisplayAll;
