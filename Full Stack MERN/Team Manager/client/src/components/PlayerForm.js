import React, { useState } from "react";

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
      <form onSubmit={onSubmitHandler}>
      {errors.map((err, i) => (
        <p key={i} style={{ color: "red" }}>
          {err}
        </p>
      ))}
        <p>
          <label>Player Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <p>
          <label>Preferred Position:</label>
          <input
            type="text"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
        </p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PlayerForm;
