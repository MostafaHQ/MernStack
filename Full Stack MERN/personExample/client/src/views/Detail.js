import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
// import { useParams } from "react-router-dom";

const Detail = (props) => {
  const [person, setPerson] = useState({});
  // const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people/" + props.id)
      .then((res) => setPerson(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <p>First Name: {person.firstName}</p>
      <p>Last Name: {person.lastName}</p>
      <Link to={"/people/edit/" + person._id}>Edit</Link>
    </div>
  );
};

export default Detail;
