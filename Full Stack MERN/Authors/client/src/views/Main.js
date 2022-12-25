import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";
import AuthorForm from "./AuthorForm";

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);

  const addToDom = (newAuthor) => {
    axios
      .post("http://localhost:8000/api/authors", newAuthor)
      .then((res) => setAuthors([...authors, res.data]))
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
      <AuthorForm onSubmitProp={addToDom} initialName="" errors={errors} />
    </div>
  );
};

export default Main;
