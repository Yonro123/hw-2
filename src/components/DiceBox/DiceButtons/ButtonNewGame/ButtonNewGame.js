import { Button } from "@chakra-ui/react";

export default function ButtonNewGame({ setPlayers, setIsDisabled }) {
  const newGame = () => {
    setPlayers([
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
    setIsDisabled(false);
  };
  return (
    <div className="ButtonBox" style={{ marginBottom: "100px" }}>
      <Button
        fontWeight="500"
        fontSize="16px"
        color="gray"
        colorScheme="transparent"
        size="sm"
        leftIcon="🐷"
        onClick={newGame}
      >
        NEW GAME
      </Button>
    </div>
  );
}
