import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowOne = (props) => {
  // getting :id from route
  const { id } = useParams();

  // state vars to show
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    // go to the server route, get the obj
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then((serverRes) => {
        console.log(serverRes.data.Product);
        // the thing that comes back from the server (DB)
        // we want to put it in state so we can update it
        setTitle(serverRes.data.Product.title);
        setPrice(serverRes.data.Product.price);
        setDescription(serverRes.data.Product.description);
      })
      .catch((serverErr) => console.log(serverErr));
  }, [id]);

  return (
    <>
    {/* {JSON.stringify(title)} */}
    <hr />
    <h3>{title}</h3>
    <h4>Price: <br />${price}</h4>
    <h4>Description: <br />{description}</h4>
    </>
  )
};

export default ShowOne;
