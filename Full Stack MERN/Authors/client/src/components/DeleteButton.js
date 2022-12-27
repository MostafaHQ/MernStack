import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteButton = (props) => {
  const { authorId, successCallback } = props;
  const deleteAuthor = (e) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId)
      .then((res) => successCallback());
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={deleteAuthor}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
