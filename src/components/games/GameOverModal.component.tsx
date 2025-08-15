// src/components/games/GameOverModal.component.tsx

interface GameOverModalProps {
  isOpen: boolean;
  onRetry: () => void;
  onFinish: () => void;
}

export default function GameOverModal({
  isOpen,
  onRetry,
  onFinish,
}: GameOverModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 bg-black/70 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">🎉 Žaidimas baigtas!</h2>
        <p className="mb-6 text-lg">Atspėjai visas spalvas!</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onRetry}
            className="bg-purplePrimary hover:bg-purpleDark text-white font-semibold py-2 px-6 rounded-lg"
          >
            Kartoti
          </button>
          <button
            onClick={onFinish}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Baigti
          </button>
        </div>
      </div>
    </div>
  );
}
