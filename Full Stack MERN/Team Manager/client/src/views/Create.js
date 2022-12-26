import React, { useState } from "react";
import axios from "axios";
import PlayerForm from "../components/PlayerForm";
import { navigate } from "@reach/router";

const Create = () => {
  const [errors, setErrors] = useState([]);
  const createPlayer = (player) => {
    axios
      .post("http://localhost:8000/api/players", player)
      .then((res) => {
        console.log(res);
        navigate("/players/list");
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
      <PlayerForm
        onSubmitProp={createPlayer}
        initialName=""
        initialPosition=""
        errors={errors}
      />
    </div>
  );
};

export default Create;
