import React, { useState } from "react";
import {
  Button,
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  Input,
  Card,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

const PlayerForm = (props) => {
  const { onSubmitProp, initialName, initialPosition, errors } = props;
  const [name, setName] = useState(initialName);
  const [position, setPosition] = useState(initialPosition);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({ name, position });
    console.log(errors);
  };
  return (
    <div>
      <Paper elevation={6} className="paper">
        <form className="form1" onSubmit={onSubmitHandler}>
          <div>
            <FormControl>
              <InputLabel>Player Name:</InputLabel>
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel>Preferred Position:</InputLabel>
              <Input
                type="text"
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
            </FormControl>
          </div>
          {errors.map((err, i) => (
            <p key={i} style={{ color: "red" }}>
              {err}
            </p>
          ))}
          <div>
            <Button variant="contained" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default PlayerForm;
