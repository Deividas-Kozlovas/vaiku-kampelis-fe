// src/pages/ColoringGalleryPage.tsx
import { useState } from "react";
import PrintablesGalleryComponent from "../../components/printables/PrintablesGallery.component";
import PrintableImageModalComponent from "../../components/printables/PrintableImageModal.component";
import MathPrintable from "../../assets/images/printables/math/math-worksheet-1.png";

export default function ColoringGalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-4">
      <PrintablesGalleryComponent
        images={[MathPrintable]}
        onSelect={setSelected}
      />

      {selected && (
        <PrintableImageModalComponent
          src={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
