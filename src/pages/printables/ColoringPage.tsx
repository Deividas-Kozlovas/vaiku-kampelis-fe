// src/pages/ColoringGalleryPage.tsx
import { useState } from "react";
import coloringData from "./coloringData";
import PrintablesGalleryComponent from "../../components/printables/PrintablesGallery.component";
import PrintableImageModalComponent from "../../components/printables/PrintableImageModal.component";

export default function ColoringGalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-4">
      <PrintablesGalleryComponent
        images={coloringData}
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
