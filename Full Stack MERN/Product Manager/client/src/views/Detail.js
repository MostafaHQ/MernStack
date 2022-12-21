import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  const { removeFromDom } = props;
  const deleteProduct = (personId) => {
    axios
      .delete("http://localhost:8000/api/products/" + personId)
      .then((res) => removeFromDom(personId))
      .catch((err) => console.error(err));
    navigate("/")
  };

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.desc}</p>
      <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
      <Link to={"/products/edit/" + product._id}>Edit</Link>
    </div>
  );
};

export default Detail;
