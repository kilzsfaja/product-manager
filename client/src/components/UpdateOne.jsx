import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateOne = () => {
  // getting :id from route
  const { id } = useParams();

  // state vars for input
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  // get from DB
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((serverRes) => {
        console.log(serverRes.data.Product);
        setTitle(serverRes.data.Product.title);
        setPrice(serverRes.data.Product.price);
        setDescription(serverRes.data.Product.description);
      })
      .catch((serverError) => console.log(serverError));
  }, [id]);

  // update form
  const updateProduct = (e) => {
    e.preventDefault();

    // same as in server > model
    const tempProductToServer = {
      title: title,
      price: price,
      description: description,
    };
    //make a post request to create a new person
    axios
      .patch(`http://localhost:8000/api/product/${id}`, tempProductToServer)
      .then((serverRes) => {
        console.log(serverRes.data.Products)
        navigate("/")
      })
      .catch((serverError) => {console.log(serverError)});
  };

  return (
    <>
      <hr />
      <h3>Edit Product</h3>
      <form onSubmit={updateProduct}>
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
        <p></p>
        <button>Edit Product</button>
      </form>
    </>
  );
};

export default UpdateOne;
