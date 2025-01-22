import { useGameState } from "../state-utils";
import Header from "../components/header";
import Page1 from "../../HomePage/page";

export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state1;

  return (
    <div>
      <Header mixedFraction={mixedFraction} />
      <Page1 />
    </div>
  );
}
