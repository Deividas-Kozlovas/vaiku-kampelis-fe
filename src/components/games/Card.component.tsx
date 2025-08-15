interface CardComponentProps {
  item: string | number;
  onClick: () => void;
  backgroundColor: string;
  showText?: boolean;
}

export default function CardComponent({
  item,
  onClick,
  backgroundColor,
  showText = false,
}: CardComponentProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition hover:scale-105"
      style={{
        backgroundColor,
        height: "100%",
      }}
    >
      {showText && (
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          {item}
        </span>
      )}
    </div>
  );
}
