"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// change to interface?
type FiltersContextType = {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export function FiltersProvider({
  children,
  initial = [],
}: {
  children: ReactNode;
  initial?: string[];
}) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(initial);

  return (
    <FiltersContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
}

