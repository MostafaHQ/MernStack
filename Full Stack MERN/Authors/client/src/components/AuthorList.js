import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const AuthorList = (props) => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <Link to={"/new"}>Add an author</Link>
      <h3>We have quotes by:</h3>
      {/* <table>
        <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
        {authors.map((author, i) => {
          <tr key={i}>
            <td>{authors}</td>
            <td>
              <Link to={"/authors/" + author._id}>Edit</Link> |
              <DeleteButton
                authorId={author._id}
                successCallback={() => removeFromDom(author._id)}
              />
            </td>
          </tr>;
        })}
      </table> */}
    </div>
  );
};

export default AuthorList;
