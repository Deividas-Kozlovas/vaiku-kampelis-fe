// src/components/ImageModal.tsx
import { useRef } from "react";

interface ImageModalProps {
  src: string;
  onClose: () => void;
}

export default function PrintableImageModalComponent({
  src,
  onClose,
}: ImageModalProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Coloring Page</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
            img { max-width: 100%; max-height: 100vh; }
          </style>
        </head>
        <body>
          <img src="${src}" />
          <script>window.onload = () => window.print();</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 px-4">
      <div className="relative max-w-full max-h-full">
        <img
          ref={imageRef}
          src={src}
          alt="Full View"
          className="max-h-screen-80 max-w-screen-80 border-4 border-purplePrimary rounded-md shadow-xl"
        />
        <div className="mt-4 flex justify-center">
          <button
            className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
            onClick={handlePrint}
          >
            Spausdinti
          </button>
          <button
            className="ml-4 bg-red-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-red-600 transition"
            onClick={onClose}
          >
            Uždaryti
          </button>
        </div>
      </div>
    </div>
  );
}
