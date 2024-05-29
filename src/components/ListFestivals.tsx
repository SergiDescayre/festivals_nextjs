"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFestivalContext } from "@/context/FestivalContext";
import { FestivalContextType } from "@/types/types";
import CardFestival from "./CardFestival";
import { Festival } from "@/types/types";

const ListFestivals = () => {
  const { festivals } = useFestivalContext() as FestivalContextType;
  const [ordered, setOrdered] = useState<Festival[]>([]);
  const [selectModality , setSelectModality] = useState<string>("")

  useEffect(() => {
    setOrdered(festivals);
  }, [festivals]); 

  const festivalsAsc = () => {
    const sortedFestivals = [...ordered].sort(
      (a, b) =>
        new Date(a.data_start).getTime() - new Date(b.data_start).getTime()
    );
    setOrdered(sortedFestivals);
  };

  const festivalsDesc = () => {
    const sortedFestivals = [...ordered].sort(
      (a, b) =>
        new Date(b.data_start).getTime() - new Date(a.data_start).getTime()
    );
    setOrdered(sortedFestivals);
  };

  const filterByModality = (e: React.ChangeEvent<HTMLSelectElement>)  => {
    setOrdered(festivals)
    if(e.target.value === "Lindy Hop"){
      setOrdered(festivals.filter(item => item.modality.includes("Lindy Hop")))
      setSelectModality("Lindy Hop")
    }
    if(e.target.value === "Blues"){
      setOrdered(festivals.filter(item => item.modality.includes("Blues")))
      setSelectModality("Blues")
    }
    if(e.target.value === "Balboa"){
      setOrdered(festivals.filter(item => item.modality.includes("Balboa")))
      setSelectModality("Balboa")
    }
    if(e.target.value === "Todos"){
      setSelectModality("Todos")
    }
  }

  return (
    <section className="container mx-auto">
      <div className="bg-dark50 ">
        <div className = "flex py-8 gap-3 justify-center px-5">
        <select className="select select-sm w-full max-w-xs bg-orange-100" value={selectModality} onChange={filterByModality}>
          <option className="bg-secondary" value="Todos" >Todos</option>
          <option className="bg-secondary" value="Lindy Hop" >Lindy Hop</option>
          <option className="bg-secondary" value="Blues" >Blues</option>
          <option className="bg-secondary" value="Balboa" >Balboa</option>
        </select>
        <button className="btn btn-sm bg-primary border-none hover:bg-orange-100 " onClick={festivalsAsc}>
         <Image src="/assets/arrow_up.svg" width={10} height={10} alt="arrow" />
        </button>
        <button className="btn  btn-sm bg-primary border-none hover:bg-orange-100 " onClick={festivalsDesc}>
        <Image src="/assets/arrow_down.svg" width={10} height={10} alt="arrow" />
        </button>
        </div>
      </div>

      <div className="flex justify-center gap-4 bg-dark50 flex-wrap py-6">
        {ordered.map((fest) => (
          <CardFestival fest={fest} key={fest.docId} />
        ))}
      </div>
    </section>
  );
};

export default ListFestivals;
