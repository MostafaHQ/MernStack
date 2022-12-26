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
      <Paper elevation={6}>
        <form onSubmit={onSubmitHandler}>
          {errors.map((err, i) => (
            <p key={i} style={{ color: "red" }}>
              {err}
            </p>
          ))}
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
