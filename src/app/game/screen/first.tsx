import { useGameState } from "../state-utils";
import Header from "../components/Header";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Page5 from "../pages/Page5";

export default function FirstScreen() {
  const { gameStateRef } = useGameState();
  const { mixedFraction, step } = gameStateRef.current.state1;

  const renderPage = () => {
    switch (step) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
      case 5:
        return <Page5 />;
      default:
        return <Page1 />;
    }
  };

  return (
    <div>
      <Header mixedFraction={mixedFraction} />
      {renderPage()}
    </div>
  );
}