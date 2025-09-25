import Image from "next/image";

interface CategoryCardProps {
  categoryName: string;
  imageUrl: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function CategoryCard({
  categoryName,
  imageUrl,
  onClick,
  isSelected
}: CategoryCardProps) {
  return (
    <button
    onClick={onClick}
      className={`flex items-center border rounded-lg shadow-custom-light transition duration-300 hover:scale-[1.02]
        ${isSelected ? "border-selected" : "border-[var(--stroke)] bg-[var(--white)]"}`}
    >
      <h4 className="p-[0.75rem]">{categoryName}</h4>
      <div className="relative w-[5rem] h-[5rem]">
        <Image
          src={imageUrl}
          alt={categoryName}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </button>
  );
}
