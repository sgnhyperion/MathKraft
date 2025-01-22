import { useGameState } from '../state-utils';
import Header from '../components/header';

export default function ThirdScreen() {
  const { gameStateRef } = useGameState();
  const { step, mixedFraction1, mixedFraction2 } = gameStateRef.current.state3;

  return (
    <div className="mx-auto">
      <Header mixedFraction={mixedFraction1} />
    </div>
  )
}
  
  