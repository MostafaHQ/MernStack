import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { id, successCallback } = props;
  const deleteProduct = (e) => {
    axios
      .delete("http://localhost:8000/api/products/" + props.id)
      .then((res) => {
        successCallback();
      });
  };
  return (
    <div>
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
};

export default DeleteButton;
