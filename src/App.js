import { ChakraProvider } from "@chakra-ui/react";

import DiceBox from "./components/DiceBox/DiceBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <DiceBox />
      </ChakraProvider>
    </div>
  );
}

export default App;
