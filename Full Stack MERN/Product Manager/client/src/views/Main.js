import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToDom = (newProduct) => {
    axios
      .post("http://localhost:8000/api/products", newProduct)
      .then((res) => setProducts([...products, res.data]));
  };

  return (
    <div>
      <ProductForm
        onSubmitProp={addToDom}
        initialTitle=""
        initialPrice=""
        initialDesc=""
      />
      <hr />
      {loaded && (
        <ProductList products={products}/>
      )}
    </div>
  );
};

export default Main;
