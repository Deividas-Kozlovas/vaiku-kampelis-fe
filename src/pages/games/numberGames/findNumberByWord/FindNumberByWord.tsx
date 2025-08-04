import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { numbersToFindInWords, NumberWord } from "./findNumberByWordData";
import {
  getRandomLightColor,
  shuffleArray,
} from "../../../../utils/cardGames.util";
import CardComponent from "../../../../components/games/Card.component";
import GameOverModal from "../../../../components/games/GameOverModal.component";

export default function NumberCards() {
  const navigate = useNavigate();

  // prepare the deck: each card knows its `index` (1–10), its `word`, and its 0-based array position
  const initialCards: (NumberWord & { originalIndex: number })[] =
    numbersToFindInWords.map((nw, idx) => ({
      ...nw,
      originalIndex: idx,
    }));

  // state
  const [allCards, setAllCards] = useState(() => shuffleArray(initialCards));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colors, setColors] = useState<string[]>(() =>
    Array(9)
      .fill("")
      .map(() => getRandomLightColor())
  );
  const [isGameOver, setIsGameOver] = useState(false);

  // cardsToShow lives in state so it only changes when we explicitly set it
  const [cardsToShow, setCardsToShow] = useState(() => {
    const hand = allCards.slice(0, 9);
    if (!hand.some((c) => c.originalIndex === currentIndex)) {
      const target = allCards.find((c) => c.originalIndex === currentIndex)!;
      hand[Math.floor(Math.random() * 9)] = target;
    }
    return hand;
  });

  // whenever we shuffle or advance, pick a fresh 3×3 that includes the current target
  useEffect(() => {
    const hand = allCards.slice(0, 9);
    if (!hand.some((c) => c.originalIndex === currentIndex)) {
      const target = allCards.find((c) => c.originalIndex === currentIndex)!;
      hand[Math.floor(Math.random() * 9)] = target;
    }
    setCardsToShow(hand);
  }, [allCards, currentIndex]);

  // when a card is clicked…
  function handleClick(card: { originalIndex: number }) {
    if (card.originalIndex === currentIndex) {
      // correct pick
      if (currentIndex === numbersToFindInWords.length - 1) {
        setIsGameOver(true);
      } else {
        setCurrentIndex((i) => i + 1);
        setAllCards((prev) => shuffleArray(prev));
        setColors(
          Array(9)
            .fill("")
            .map(() => getRandomLightColor())
        );
      }
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setAllCards(shuffleArray(initialCards));
    setColors(
      Array(9)
        .fill("")
        .map(() => getRandomLightColor())
    );
    setIsGameOver(false);
  }

  function handleFinish() {
    navigate("/");
  }

  const progressPercent = (currentIndex / numbersToFindInWords.length) * 100;

  return (
    <>
      <div className="relative z-20 flex flex-col h-screen w-screen p-6 box-border max-w-screen max-h-screen overflow-hidden bg-purpleLight">
        {/* progress bar */}
        <div className="w-full bg-gray-300 rounded-full h-6 mb-4">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* show the target word */}
        <div
          className="flex-shrink-0 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4 text-[clamp(1.75rem,5vw,4rem)] font-bold text-gray-800"
          style={{ height: "10vh", minHeight: 60 }}
        >
          {numbersToFindInWords[currentIndex].word}
        </div>

        {/* 3×3 number grid */}
        <div className="grid grid-cols-3 gap-4 flex-grow">
          {cardsToShow.map((card, i) => (
            <CardComponent
              key={i}
              item={card.index}
              onClick={() => handleClick(card)}
              backgroundColor={colors[i]}
              showText={true}
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
}
