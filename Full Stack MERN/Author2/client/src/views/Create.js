import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";

const Create = () => {
  const [errors, setErrors] = useState([]);
  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/authors", author)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };
  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to={"/"}>Home</Link>
      <h4>Add a new author:</h4>
      <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors} />
    </div>
  );
};

export default Create;
