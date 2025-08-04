import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alphabet } from "./findAlphabetLettersData";
import GameOverModal from "../../../../components/games/GameOverModal.component";
import {
  getRandomLightColor,
  shuffleArray,
} from "../../../../utils/cardGames.util";
import CardComponent from "../../../../components/games/Card.component";

export default function AlphabetGame() {
  const navigate = useNavigate();
  // prepare the deck
  const initialCards = alphabet.map((letter, index) => ({
    letter,
    originalIndex: index,
  }));

  const [allCards, setAllCards] = useState(() => shuffleArray(initialCards));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colors, setColors] = useState<string[]>(() =>
    Array(9)
      .fill("")
      .map(() => getRandomLightColor())
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(() => {
    // initial hand
    const sliced = allCards.slice(0, 9);
    if (!sliced.some((c) => c.originalIndex === currentIndex)) {
      const currentCard = allCards.find(
        (c) => c.originalIndex === currentIndex
      )!;
      sliced[Math.floor(Math.random() * 9)] = currentCard;
    }
    return sliced;
  });

  // recompute whenever allCards or currentIndex changes
  useEffect(() => {
    const sliced = allCards.slice(0, 9);
    if (!sliced.some((c) => c.originalIndex === currentIndex)) {
      const currentCard = allCards.find(
        (c) => c.originalIndex === currentIndex
      )!;
      sliced[Math.floor(Math.random() * 9)] = currentCard;
    }
    setCardsToShow(sliced);
  }, [allCards, currentIndex]);

  // handle a click on one of the cards
  function handleClick(card: { originalIndex: number }) {
    if (card.originalIndex === currentIndex) {
      if (currentIndex === alphabet.length - 1) {
        setIsGameOver(true);
      } else {
        // next round
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

  // reset the game
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

  // finish — go back home
  function handleFinish() {
    navigate("/");
  }

  const progressPercent = (currentIndex / alphabet.length) * 100;

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

        {/* current letter */}
        <div
          className="flex-shrink-0 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4 text-[clamp(1.75rem,5vw,4rem)] font-bold text-gray-800 leading-tight tracking-wide"
          style={{ height: "10vh", minHeight: 60 }}
        >
          {alphabet[currentIndex]}
        </div>
        {/* the 3×3 grid */}
        <div className="grid grid-cols-3 gap-4 flex-grow">
          {cardsToShow.map((item, i) => (
            <CardComponent
              key={i}
              item={item.letter}
              onClick={() => handleClick(item)}
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
