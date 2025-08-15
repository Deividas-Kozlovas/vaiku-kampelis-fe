import { useState } from "react";
import useMobileScrollLock from "../../../../hooks/useMobileScrollLock";
import { useNavigate } from "react-router-dom";
import GameOverModal from "../../../../components/games/GameOverModal.component";
import { generateGrid } from "../../../../utils/cardGames.util";
import { colorPairs, type ColorPair } from "./findColorByWordData";
import CardComponent from "../../../../components/games/Card.component";
import FeedbackOverlay, {
  type FeedbackType,
} from "../../../../components/games/FeedbackOverlay.component";

export const ColorMatchGame = () => {
  useMobileScrollLock(true);
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [gridItems, setGridItems] = useState<ColorPair[]>(() =>
    generateGrid(colorPairs, 0)
  );
  const [feedback, setFeedback] = useState<FeedbackType>(null);

  const handleClick = (item: ColorPair): void => {
    const correct: ColorPair = colorPairs[currentIndex];
    const isCorrect = item.lt === correct.lt;
    setFeedback(isCorrect ? "correct" : "wrong");

    if (isCorrect) {
      if (currentIndex === colorPairs.length - 1) {
        setIsGameOver(true);
      } else {
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setGridItems(generateGrid(colorPairs, nextIndex));
      }
    }
  };

  const handleRetry = (): void => {
    setCurrentIndex(0);
    setGridItems(generateGrid(colorPairs, 0));
    setIsGameOver(false);
  };

  const handleFinish = (): void => {
    navigate("/");
  };

  const progressPercent = (currentIndex / colorPairs.length) * 100;

  return (
    <>
      <FeedbackOverlay type={feedback} onDone={() => setFeedback(null)} />
      <div className="relative z-10 flex flex-col h-screen w-screen p-6 bg-purpleLight overflow-hidden">
        {/* Progress */}
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div
          className="flex-shrink-0 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4
                     text-[clamp(1.75rem,5vw,4rem)] font-bold text-gray-800 leading-tight tracking-wide"
          style={{ height: "10vh", minHeight: 60 }}
        >
          {colorPairs[currentIndex].lt}
        </div>

        <div className="grid grid-cols-3 gap-4 flex-grow">
          {gridItems.map((item, i) => (
            <CardComponent
              key={i}
              item={item.lt}
              onClick={() => handleClick(item)}
              backgroundColor={item.hex}
              showText={false}
            />
          ))}
        </div>
      </div>

      <GameOverModal
        isOpen={isGameOver}
        onRetry={handleRetry}
        onFinish={handleFinish}
      />
    </>
  );
};

export default ColorMatchGame;
