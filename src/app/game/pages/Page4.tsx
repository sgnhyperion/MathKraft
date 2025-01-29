import Button from "@/app/game/components/Button";
import HeaderLayout from "../components/HeaderLayout";
import { initialGameState } from "@/app/game/game-state";
import Circle from "@/app/game/components/Circle";
import { useSliceStore } from "@/store/useSliceStore";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Fraction from "@/app/game/components/Fraction";

const page = () => {
  const { slice } = useSliceStore();

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <div className="w-1/2 rounded-2xl shadow-lg flex flex-col justify-center h-full">
        <HeaderLayout
          text="ADD THE FRACTION"
          emoji="😀"
          whole={initialGameState.state1.mixedFraction.whole}
          num={initialGameState.state1.mixedFraction.numerator}
          denom={initialGameState.state1.mixedFraction.denominator}
          variant="addition"
        />

        {/* Middle Section */}
        <div className="flex justify-center items-center space-x-6 h-[25%] border-t-2 border-b-2 border-[#c0bdbd] w-full">
          <Circle
            numerator={slice || 4}
            denominator={slice || 4}
            color="#98d400" // Color of the filled slices (e.g., tomato red)
            circleColor="#d3ea00" // Background color of the circle (e.g., light beige)
          />

          <Circle
            numerator={1}
            denominator={slice || 4}
            color="#d3ea00" // Color of the filled slices (e.g., tomato red)
            circleColor="#98d400" // Background color of the circle (e.g., light beige)
          />
          <Circle
            numerator={slice || 4}
            denominator={slice || 4}
            color="#d3ea00" // Color of the filled slices (e.g., tomato red)
            circleColor="#d3ea00" // Background color of the circle (e.g., light beige)
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center pb-10 gap-4  w-full bg-[#fff6f6]">
          <div className="flex items-center justify-evenly w-[60%]">
            <div className="text-[1.5vw]">So there are</div>
            <Input />
            <Fraction
              color="black"
              size="text-[1.5vw]"
              num="1"
              denom={slice || 4}
            />
            <div className="text-[1.5vw]">sized pieces in 3 wholes</div>
          </div>

          <Card className="w-full max-w-[55%]">
            <CardHeader className="bg-[#cbec9e] py-2">
              <h2 className="text-center text-[1.8vw] uppercase">Awesome</h2>
            </CardHeader>
            <CardContent className="bg-[#f6f4c5] p-6">
              <div className="flex items-center justify-center gap-6 text-[1.8vw]  h-[15vh]">
                <span>
                  {initialGameState.state1.mixedFraction.whole} wholes ={" "}
                </span>
                <div className="flex flex-col items-center justify-evenly h-full">
                  <Input />
                  <div className="w-[3vw] bg-black h-[0.2rem]"></div>
                  <div className=" text-[2vw] w-full flex justify-center">
                    {slice || 4}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button text="Step 3" symbol=">>" />
        </div>
      </div>
    </div>
  );
};

export default page;
