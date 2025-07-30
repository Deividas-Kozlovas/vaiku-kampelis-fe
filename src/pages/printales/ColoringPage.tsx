import { useRef, useState } from "react";

export default function ColoringPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Example: Hardcoded coloring page URLs (put yours in /public/coloring/)
  const images = [
    "/coloring/1.png",
    "/coloring/2.png",
    "/coloring/3.png",
    "/coloring/4.png",
  ];

  const handlePrint = () => {
    if (!selectedImage) return;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
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
            <img src="${selectedImage}" />
            <script>
              window.onload = () => window.print();
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div className="p-4">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Coloring Page ${idx + 1}`}
            className="cursor-pointer border-2 border-purpleLight hover:border-purplePrimary rounded-lg"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-pinkAccent text-white px-3 py-1 rounded shadow-lg hover:bg-pink-600"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <button
              className="absolute top-2 left-2 bg-yellowAccent text-black px-3 py-1 rounded shadow-lg hover:bg-yellow-400"
              onClick={handlePrint}
            >
              Print
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              ref={imageRef}
              className="max-h-screen max-w-full border-4 border-purplePrimary rounded-md shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
