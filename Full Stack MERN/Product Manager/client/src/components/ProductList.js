import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
  // const { removeFromDom } = props;
  const [product, setProduct] = useState([]);
  // const deleteProduct = (personId) => {
  //   axios
  //     .delete("http://localhost:8000/api/products/" + personId)
  //     .then((res) => removeFromDom(personId))
  //     .catch((err) => console.error(err));
  // };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProduct(res.data));
  }, []);

  const removeFromDom = (productId) => {
    setProduct(product.filter((product) => product._id !== productId));
  };

  return (
    <div>
      {props.products.map((product, i) => (
        <p key={i}>
          <Link to={"/products/" + product._id}>{product.title}</Link> |
          <DeleteButton
            personId={product._id}
            successCallback={() => removeFromDom(product._id)}
          />
        </p>
      ))}
    </div>
  );
};

export default ProductList;
