import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Form = (props) => {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const createProduct = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();

    const tempProductToServer = {
      title: title,
      price: price,
      description: description
  }
    //make a post request to create a new person
    axios.post("http://localhost:8000/api/product", tempProductToServer)
      .then((serverRes) => console.log(serverRes))
      .catch((serverError) => console.log(serverError));
  };


  return (
    <>
      <fieldset>
        <legend>Form.jsx</legend>
        <h2>Add Product</h2>
        <form onSubmit={createProduct}>
          <br />
          {/* <p>{JSON.stringify(title)}</p> */}
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          {/* <p>{JSON.stringify(price)}</p> */}
          <label>Price</label>
          <br />
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <br />
          {/* <p>{JSON.stringify(description)}</p> */}
          <label>Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <br />
          <input type="submit" />
        </form>
        <br />
      </fieldset>
    </>
  );
};

export default Form;
