import React, { useState } from "react";
import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Input,
  Card,
} from "@material-ui/core";

const AuthorForm = (props) => {
  const { initialName, onSubmitProp, errors } = props;
  const [authorName, setAuthorName] = useState(initialName);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ authorName });
    console.log(errors);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <p>
          <FormControl>
            <InputLabel>Name</InputLabel>
            <br />
            <Input
              type="text"
              onChange={(e) => setAuthorName(e.target.value)}
              value={authorName}
            />
          </FormControl>
        </p>
        <Link to={"/"}>Cancel</Link>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AuthorForm;
