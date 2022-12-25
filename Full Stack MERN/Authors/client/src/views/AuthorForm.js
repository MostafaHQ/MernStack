import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const AuthorForm = (props) => {
  const { initialName, onSubmitProp } = props;
  const [authorName, setAuthorName] = useState(initialName);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ authorName });
    console.log(props.errors);
    // navigate("/");
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h3>Add an new author:</h3>
      <form onSubmit={onSubmitHandler}>
        {props.errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <p>
          <label>Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => setAuthorName(e.target.value)}
            value={authorName}
          />
        </p>
        <Link to={"/"}>Cancel</Link>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AuthorForm;
