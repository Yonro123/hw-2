import { Button } from "@chakra-ui/react";

export default function ButtonNewGame({
  setPlayers,
  setIsDisabled,
  defaultPlayerSettings,
}) {
  const newGame = () => {
    console.log(defaultPlayerSettings);
    // setPlayers(defaultPlayerSettings);
    setIsDisabled(false);
  };
  return (
    <div className="ButtonBox">
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
