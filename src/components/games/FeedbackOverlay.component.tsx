import { useEffect, useState } from "react";
import correctSoundUrl from "../../assets/sounds/correct-sound.wav";
import wrongSoundUrl from "../../assets/sounds/wrong-sound.wav";
import correctIconUrl from "../../assets/images/icons/correct.svg";
import wrongIconUrl from "../../assets/images/icons/wrong.svg";

export type FeedbackType = "correct" | "wrong" | null;

interface FeedbackOverlayProps {
  type: FeedbackType;
  onDone: () => void;
  autoHideMs?: number;
}

export default function FeedbackOverlay({
  type,
  onDone,
  autoHideMs = 900,
}: FeedbackOverlayProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!type) return;

    const soundSrc = type === "correct" ? correctSoundUrl : wrongSoundUrl;

    const audio = new Audio(soundSrc);
    audio.play().catch(() => {});

    const t = setTimeout(onDone, autoHideMs);
    setMounted(true);
    return () => {
      clearTimeout(t);
      setMounted(false);
    };
  }, [type, onDone, autoHideMs]);

  if (!type) return null;

  const isCorrect = type === "correct";

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60">
      <div
        className={`relative select-none shadow-2xl rounded-full flex items-center justify-center 
						${isCorrect ? "bg-green-500" : "bg-red-500"}
						w-40 h-40 sm:w-48 sm:h-48 
						transform transition-transform duration-300 ease-out 
						${mounted ? "scale-100" : "scale-0"}`}
      >
        {/* subtle ping ring */}
        <span
          className={`absolute inset-0 rounded-full opacity-40 
							${isCorrect ? "bg-green-400" : "bg-red-400"} animate-ping`}
        />
        <img
          src={isCorrect ? correctIconUrl : wrongIconUrl}
          alt={isCorrect ? "Teisingai" : "Neteisingai"}
          className="w-24 h-24 sm:w-28 sm:h-28 relative"
          draggable={false}
        />
      </div>
    </div>
  );
}
