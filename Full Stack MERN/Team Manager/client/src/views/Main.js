import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import Nav from "../components/Nav";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/players")
      .then((res) => {
        setPlayers(res.data);
        console.log(res.data);
        console.log(players);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);
  const removeFromDom = (playerId) => {
    setPlayers(players.filter((player) => player._id !== playerId));
  };
  return (
    <div>
      <Nav />
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loaded &&
            players.map((player, i) => {
              return (
                <tr key={i}>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>
                    <DeleteButton
                      playerId={player._id}
                      successCallback={() => removeFromDom(player._id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
