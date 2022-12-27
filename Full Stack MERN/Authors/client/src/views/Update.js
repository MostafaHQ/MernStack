import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import AuthorForm from "./AuthorForm";
import DeleteButton from "../components/DeleteButton";

const Update = (props) => {
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + props.id).then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + props.id, author)
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
      <h3>Edit this author:</h3>
      {loaded && (
        <>
          <AuthorForm
            onSubmitProp={updateAuthor}
            initialName={author.authorName}
            formErrors={errors}
          />
          <DeleteButton
            authorId={author._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  );
};

export default Update;
