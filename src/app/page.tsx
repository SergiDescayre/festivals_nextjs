"use client";
import { useEffect } from "react";
import { useFestivalContext } from "@/context/FestivalContext";
import ListFestivals from "@/components/ListFestivals";
import Header from "@/components/Header";

export default function Home() {
  const { getFestivals } = useFestivalContext();

  useEffect(() => {
    getFestivals();
  }, []);

  return (
    <section className="bg-dark50">
      <Header />
      <ListFestivals />
    </section>
  );
}
