interface GalleryGridProps {
  images: string[];
  onSelect: (src: string) => void;
}

export default function PrintablesGalleryComponent({
  images,
  onSelect,
}: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Coloring Page ${idx + 1}`}
          className="w-full h-auto cursor-pointer border-2 border-purple-200 hover:border-purple-500 rounded-lg transition"
          onClick={() => onSelect(src)}
        />
      ))}
    </div>
  );
}
