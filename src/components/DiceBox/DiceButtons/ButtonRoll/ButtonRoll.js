import { Button } from "@chakra-ui/react";

import "./ButtonRoll.css";
import { useState } from "react";

export default function ButtonRoll({
  setRandomPoint,
  setPlayers,
  players,
  isDisabled,
}) {
  const randomGenerateNumber = () => {
    const newPlayers = [...players];
    const random = Math.trunc(1 + Math.random() * (6 + 1 - 1));
    newPlayers.map((player) => {
      if (player.turn) {
        player.randomPoint += random;
      }
      if (random === 1) {
        setRandomPoint(random);
        player.randomPoint = 0;
        player.turn = !player.turn;
      }
    });
    setRandomPoint(random);
    setPlayers(newPlayers);
  };
  return (
    <div className="ButtonBox">
      <Button
        fontWeight="500"
        fontSize="16px"
        color="gray"
        colorScheme="transparent"
        size="sm"
        leftIcon="🎲"
        onClick={randomGenerateNumber}
        isDisabled={isDisabled}
      >
        ROLL THE DICE
      </Button>
    </div>
  );
}
