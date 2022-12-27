import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AuthorForm from "../components/AuthorForm";
import { Link } from "@reach/router";

const Update = (props) => {
  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + props.id).then((res) => {
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
      <h4>Edit this author:</h4>
      {loaded && (
        <AuthorForm
          onSubmitProp={updateAuthor}
          initialName={author.authorName}
          errors={errors}
        />
      )}
    </div>
  );
};

export default Update;
