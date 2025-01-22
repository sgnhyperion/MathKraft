import { useGameState } from "../state-utils";
import Header from "../components/header";
import Page1 from "../../(pages)/page1/page";
import { Button } from '@/components/ui/button';
import Page2 from "../../(pages)/page2/page";
import Page3 from "../../(pages)/page3/page";
import Page4 from "../../(pages)/page4/page";
import Page5 from "../../(pages)/page5/page";

// export default function FirstScreen() {
//   const { gameStateRef, setGameStateRef } = useGameState();
//   const { mixedFraction } = gameStateRef.current.state1;

//   return (
//     <div>
//       <Header mixedFraction={mixedFraction} />
//       <Page1 />
//     </div>
//   );
// }



export default function FirstScreen() {
  const { gameStateRef, setGameStateRef } = useGameState();
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
