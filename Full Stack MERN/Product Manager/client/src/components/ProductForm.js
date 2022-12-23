import React, { useState } from "react";
import axios from "axios";

export default (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const { addToDom } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        desc,
      })
      .then((res) => addToDom(res.data.products))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </p>
      <input type="submit" />
    </form>
  );
};
