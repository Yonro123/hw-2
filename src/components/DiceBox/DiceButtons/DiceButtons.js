import { useState } from "react";
import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";
import ButtonNewGame from "./ButtonNewGame/ButtonNewGame";
import ButtonRoll from "./ButtonRoll/ButtonRoll";
import ButtonLeave from "./ButtonLeave/ButtonLeave";

import "./DiceButtons.css";

export default function DiceButtons({ players, setPlayers }) {
  const [randomPoint, setRandomPoint] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const arrIcons = [
    <GiInvertedDice1 />,
    <GiInvertedDice2 />,
    <GiInvertedDice3 />,
    <GiInvertedDice4 />,
    <GiInvertedDice5 />,
    <GiInvertedDice6 />,
  ];
  return (
    <div className="DiceButtons">
      <ButtonNewGame setPlayers={setPlayers} setIsDisabled={setIsDisabled} />
      <div className="svgDice">{arrIcons[randomPoint - 1]}</div>
      <ButtonRoll
        setPlayers={setPlayers}
        players={players}
        setRandomPoint={setRandomPoint}
        isDisabled={isDisabled}
      />
      <ButtonLeave
        setPlayers={setPlayers}
        players={players}
        setIsDisabled={setIsDisabled}
      />
    </div>
  );
}
