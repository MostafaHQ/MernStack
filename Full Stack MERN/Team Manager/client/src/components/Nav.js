import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/players/list">List</Link> |
      <Link to="/players/addplayer">Add Player</Link>
    </div>
  );
};

export default Nav;
