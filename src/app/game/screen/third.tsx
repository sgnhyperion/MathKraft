import { useGameState } from "../state-utils";
import Header from "../components/Header";

export default function ThirdScreen() {
  const { gameStateRef } = useGameState();
  const { mixedFraction1 } = gameStateRef.current.state3;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction1} />
    </div>
  );
}