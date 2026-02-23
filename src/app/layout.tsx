import React from "react";
import "../styles/globals.css";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-6 md:p-10 md:pr-0">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
