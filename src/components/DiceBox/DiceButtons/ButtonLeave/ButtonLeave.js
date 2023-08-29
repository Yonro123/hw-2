import { Button } from "@chakra-ui/react";

export default function ButtonLeave({ setPlayers, players, setIsDisabled }) {
  const passTheTurn = () => {
    const newPlayers = [...players];
    newPlayers.map((player) => {
      if (player.turn) {
        player.count += player.randomPoint;
        if (player.count >= 100) {
          player.winner = true;
          setIsDisabled(true);
        }
      }
      player.randomPoint = 0;
      player.turn = !player.turn;
    });
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
        leftIcon="👌"
        onClick={passTheTurn}
      >
        LEAVE
      </Button>
    </div>
  );
}
