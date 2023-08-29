import "./RandomBox.css";

export default function RandomBox({ randomPoint }) {
  return (
    <div className="RandomBox">
      <div className="RandomBox__title">current points</div>
      <div className="RandomBox__count">{randomPoint}</div>
    </div>
  );
}
