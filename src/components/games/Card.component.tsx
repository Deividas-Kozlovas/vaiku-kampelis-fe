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
        <span className="text-[clamp(1.75rem,5vw,4rem)] font-bold text-gray-800">
          {item}
        </span>
      )}
    </div>
  );
}
