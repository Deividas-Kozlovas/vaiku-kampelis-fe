// src/components/navigation/CardNavigation.component.tsx
import { Link } from "react-router-dom";

export interface NavItem {
  path: string;
  image: string;
  altText: string;
  text: string;
}

interface CardNavigationProps {
  items: NavItem[];
}

const CardNavigation: React.FC<CardNavigationProps> = ({ items }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <Link to={item.path} key={index} className="no-underline group">
            <div
              className="relative h-[220px] m-5 rounded-3xl overflow-hidden shadow-lg bg-white 
                         border border-purpleLight/40 
                         transition-transform duration-300 ease-in-out 
                         group-hover:-translate-y-2 group-hover:shadow-[0_10px_25px_rgba(124,58,237,0.25)]"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.altText}
                className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purpleDark/30 to-transparent z-10" />

              {/* Text content */}
              <div className="relative z-20 flex items-center justify-center h-full px-3">
                <span
                  className="text-white text-3xl font-bold text-center drop-shadow-lg 
                             bg-purplePrimary/70 rounded-xl px-4 py-2 group-hover:bg-purplePrimary transition-colors duration-300"
                >
                  {item.text}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardNavigation;
