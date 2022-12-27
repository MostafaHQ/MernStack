import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

const Update = (props) => {
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + props.id).then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/people/" + props.id, product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div>
      <h1>Update a Product</h1>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDesc={product.desc}
          />
          <DeleteButton
            productId={product._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  );
};

export default Update;
