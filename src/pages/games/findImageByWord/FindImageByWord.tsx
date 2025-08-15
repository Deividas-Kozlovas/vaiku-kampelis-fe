import { useState } from "react";
import useMobileScrollLock from "../../../hooks/useMobileScrollLock";
import FeedbackOverlay, {
  type FeedbackType,
} from "../../../components/games/FeedbackOverlay.component";
import { bathroomItems } from "./FindBathroomItemsByWordData";

function safeFileName(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[š]/g, "s")
    .replace(/[č]/g, "c")
    .replace(/[ė]/g, "e")
    .replace(/[ą]/g, "a")
    .replace(/[ū]/g, "u")
    .replace(/[į]/g, "i")
    .replace(/[ž]/g, "z")
    .replace(/ /g, "_");
}

export default function BathroomGame() {
  useMobileScrollLock(true);
  const initialCards = bathroomItems.map((word, index) => ({
    word,
    originalIndex: index,
  }));

  const [allCards, setAllCards] = useState(() => initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [feedback, setFeedback] = useState<FeedbackType | null>(null);

  function getCardsToShow() {
    const sliced = allCards.slice(0, 9);
    const includesCurrent = sliced.some(
      (card) => card.originalIndex === currentIndex
    );
    if (!includesCurrent) {
      const currentCard = allCards.find(
        (card) => card.originalIndex === currentIndex
      );
      if (!currentCard) return sliced;
      const replaceIndex = Math.floor(Math.random() * 9);
      sliced[replaceIndex] = currentCard;
    }
    return sliced;
  }

  const cardsToShow = getCardsToShow();

  function onCardClick(clickedIndex: number) {
    const isCorrect = clickedIndex === currentIndex;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      if (currentIndex === bathroomItems.length - 1) {
        setIsGameOver(true);
      } else {
        setCurrentIndex((v) => v + 1);
        const shuffled = allCards.sort(() => Math.random() - 0.5);
        setAllCards([...shuffled]);
      }
    }
  }

  function handleRetry() {
    setCurrentIndex(0);
    setAllCards([...initialCards]);
    setIsGameOver(false);
  }

  function handleFinish() {
    window.location.href = "/";
  }

  // Debugging: log image URLs
  console.log(
    "Current image URL:",
    `/assets/images/find-image-by-word/bathroom/${safeFileName(
      bathroomItems[currentIndex]
    )}.png`
  );

  return (
    <>
      <FeedbackOverlay type={feedback} onDone={() => setFeedback(null)} />
      <div className="relative z-20 flex flex-col h-screen w-screen p-4 box-border max-w-screen max-h-screen overflow-hidden">
        <div
          className="flex-shrink-0 bg-white rounded-2xl shadow-md flex items-center justify-center select-none mb-2
                     text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-gray-800 leading-tight tracking-wide p-4"
          style={{ height: "12vh", minHeight: 60 }}
        >
          {bathroomItems[currentIndex]}
        </div>

        <div
          className="grid grid-cols-3 grid-rows-3 gap-4 flex-grow"
          style={{ minHeight: 0 }}
        >
          {cardsToShow.map(({ originalIndex }) => {
            const fileName = safeFileName(bathroomItems[originalIndex]);
            const imgUrl = `/assets/images/find-image-by-word/bathroom/${fileName}.png`;
            return (
              <div
                key={originalIndex}
                onClick={() => onCardClick(originalIndex)}
                className="cursor-pointer rounded-2xl shadow-md flex items-center justify-center select-none
                         hover:shadow-xl transition-shadow duration-300 bg-white p-2"
                style={{
                  width: "100%",
                  height: "100%",
                  userSelect: "none",
                  overflow: "hidden",
                }}
              >
                <img
                  src={imgUrl}
                  alt={bathroomItems[originalIndex]}
                  className="object-contain max-h-full max-w-full"
                  draggable={false}
                  onError={() => console.warn("Image failed to load:", imgUrl)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {isGameOver && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-purplePrimary rounded-xl p-8 max-w-sm w-full text-center shadow-lg text-white font-bold">
            <h2 className="text-3xl mb-6">🎉 Sveikiname! 🎉</h2>
            <p className="mb-6 text-xl">Jūs baigėte žaidimą!</p>
            <div className="flex justify-center gap-6">
              <button
                onClick={handleRetry}
                className="bg-yellowAccent hover:bg-yellow-400 text-purpleDark font-semibold py-2 px-6 rounded-lg transition"
              >
                Bandykite dar kartą
              </button>
              <button
                onClick={handleFinish}
                className="bg-pinkAccent hover:bg-pink-400 text-purpleDark font-semibold py-2 px-6 rounded-lg transition"
              >
                Baigti
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
