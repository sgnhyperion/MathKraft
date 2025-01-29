import { useGameState } from "../state-utils";
import Header from "../components/Header";

export default function SecondScreen() {
  const { gameStateRef } = useGameState();
  const { mixedFraction } = gameStateRef.current.state2;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction} />
    </div>
  );
}