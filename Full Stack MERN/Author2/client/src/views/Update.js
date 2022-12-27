import React, {useState, useEffect} from "react";
import AuthorForm from "../components/AuthorForm";

const Update = (props) => {
    const updateAuthor = author => {

    }
  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to={"/"}>Home</Link>
      <h4>Edit this author:</h4>
      <AuthorForm onSubmitProp={updateAuthor} initialName={AuthorForm.authorName} errors={errors} />
    </div>
  );
};

export default Update;
