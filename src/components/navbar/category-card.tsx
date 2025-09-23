import Image from "next/image";

interface CategoryCardProps {
  categoryName: string;
  imageUrl: string;
}

export default function CategoryCard({
  categoryName,
  imageUrl,
}: CategoryCardProps) {
  return (
    <div
      className="flex align-top border border-[var(--stroke)] rounded-lg bg-[var(--white)] shadow-custom-light"
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
    </div>
  );
}
