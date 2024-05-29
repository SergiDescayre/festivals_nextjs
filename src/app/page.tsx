"use client";
import { useEffect } from "react";
import Header from "@/components/Header";
import { useFestivalContext } from "@/context/FestivalContext";
import { FestivalContextType } from "@/types/types";

export default function Home() {
  const { getFestivals } = useFestivalContext() as FestivalContextType;

  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <main className="bg-dark50">
      <Header />
    </main>
  );
}
