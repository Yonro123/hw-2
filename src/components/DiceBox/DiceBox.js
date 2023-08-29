import { useState } from "react";

import DicePlayer from "./DicePlayer/DicePlayer";
import DiceButtons from "./DiceButtons/DiceButtons";

import "./DiceBox.css";

const DiceBox = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Player 1",
      turn: true,
      count: 0,
      randomPoint: 0,
      winner: false,
    },
    {
      id: 2,
      name: "Player 2",
      turn: false,
      count: 0,
      randomPoint: 0,
      winner: false,
    },
  ]);

  return (
    <div className="DiceBox">
      {players.map((player) => {
        return (
          <DicePlayer
            key={player.name}
            title={player.name}
            count={player.count}
            randomPoint={player.randomPoint}
            isActivePlayer={player.turn}
            isWinner={player.winner}
          />
        );
      })}
      <DiceButtons players={players} setPlayers={setPlayers} />
    </div>
  );
};

export default DiceBox;
