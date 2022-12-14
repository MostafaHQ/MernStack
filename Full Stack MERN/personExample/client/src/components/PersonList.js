import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

const PersonList = (props) => {
  const deletePerson = (personId) => {
    axios
      .delete("http://localhost:8000/api/people/" + personId)
      .then((res) => removeFromDom(personId))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {props.people.map((person, i) => {
        return (
          <p key={i}>
            <Link to={"/people/" + person._id}>
              {person.lastName}, {person.firstName}
            </Link>
            |<button onClick={(e) => deletePerson(person._id)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
