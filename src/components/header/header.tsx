import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="pt-6 md:py-4 mb-6">
      <div className="relative w-[167px] h-[24px] md:w-[273px] md:h-[40px]">
    <Image
      src="/images/logo.svg"
      alt="Munchies Logo"
      fill
      className="object-contain"
      sizes="(max-width: 768px) 167px, (max-width: 1200px) 273px, 40px"
    />
  </div>
    </header>
  );
}
