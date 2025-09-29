import React from "react";
import "../styles/globals.css";
import Header from "@/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-[2.5rem] pr-0">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
