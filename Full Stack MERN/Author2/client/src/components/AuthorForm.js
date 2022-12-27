import React, { useState } from "react";
import { Paper, FormControl, InputLabel, Input } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";

const AuthorForm = (props) => {
  const { onSubmitProp, initialName, errors } = props;
  const [authorName, setAuthorName] = useState(initialName);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ authorName });
    console.log(errors);
  };
  return (
    <div>
      <Paper className="paper" elevation={10}>
        <form onSubmit={onSubmitHandler}>
          <div>
            <FormControl>
              <InputLabel>Author Name:</InputLabel>
              <Input
                type="text"
                onChange={(e) => setAuthorName(e.target.value)}
                value={authorName}
              />
            </FormControl>
          </div>
          {errors.map((err, i) => (
            <p key={i} style={{ color: "red" }}>
              {err}
            </p>
          ))}
          <div>
            <Link className="btn btn-danger mt-2" to={"/"}>
              Cancel
            </Link>
            <button
              className="btn btn-primary mt-2"
              variant="contained"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default AuthorForm;
