import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-[1rem]">
      <Image
        src="/images/logo.svg"
        alt="Munchies Logo"
        width={273}
        height={40}
      />
    </header>
  );
}
