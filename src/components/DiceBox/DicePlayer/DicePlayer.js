import RandomBox from "./RandomBox/RandomBox";

import "./DicePlayer.css";

export default function DicePlayer({
  title,
  count,
  randomPoint,
  isActivePlayer,
  isWinner,
}) {
  return (
    <div
      className={`DicePlayer ${isActivePlayer ? "active" : "hide"} ${
        isWinner ? "winner" : ""
      }`}
    >
      <h2>{title}</h2>
      <span>{count}</span>
      <RandomBox randomPoint={randomPoint} />
    </div>
  );
}
