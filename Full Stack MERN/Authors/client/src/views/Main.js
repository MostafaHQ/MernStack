import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorForm from "./AuthorForm";
import { navigate, Link } from "@reach/router";

const Main = () => {
  const [errors, setErrors] = useState([]);

  const addToDom = (newAuthor) => {
    axios
      .post("http://localhost:8000/api/authors", newAuthor)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.key(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h3>Add an new author:</h3>
      <AuthorForm onSubmitProp={addToDom} initialName="" errors={errors} />
    </div>
  );
};

export default Main;
