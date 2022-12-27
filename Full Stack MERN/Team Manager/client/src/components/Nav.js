import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div className="nav">
      <h2>
        <Link to="/players/list">List</Link> |{" "}
        <Link to="/players/addplayer">Add Player</Link>
        
      </h2>
    </div>
  );
};

export default Nav;
