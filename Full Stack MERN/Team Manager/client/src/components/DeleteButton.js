import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteButton = (props) => {
  const { playerId, successCallback } = props;
  const deletePlayer = (e) => {
    const ttr = window.confirm("Are you sure to delete this player");
    if (ttr) {
      axios
        .delete("http://localhost:8000/api/players/" + playerId)
        .then((res) => {
          successCallback();
        });
    }
  };
  return (
    <div>
      <button className="btn btn-danger mt-2" onClick={deletePlayer}>
        Delete
      </button>
    </div>
  );
};

export default DeleteButton;
