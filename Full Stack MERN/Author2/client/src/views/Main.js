import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { Paper } from "@material-ui/core";
import DeleteButton from "../components/DeleteButton";

const Main = () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to={"/new"}>Add an author</Link>
      <h4>We have quotes by:</h4>
      <div className="container mt-3">
        <Paper elevation={3}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Author</th>
                <th>Actions available</th>
              </tr>
            </thead>
            <tbody>
              {loaded &&
                authors.map((author, i) => {
                  return (
                    <tr key={i}>
                      <td>{author.authorName}</td>
                      <td>
                        <Link
                          className="btn btn-primary"
                          to={"/edit/" + author._id}
                        >
                          Edit
                        </Link>{" "}
                        |
                        <DeleteButton
                          authorId={author._id}
                          successCallback={() => removeFromDom(author._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Paper>
      </div>
    </div>
  );
};

export default Main;
