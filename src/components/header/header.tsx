import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-[1rem]">
      <Image
        src="/assets/logo.svg"
        alt="Munchies Logo"
        width={273}
        height={40}
      />
    </header>
  );
}
