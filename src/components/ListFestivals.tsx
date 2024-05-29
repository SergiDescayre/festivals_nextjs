"use client";
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
    // Cuando el componente se monta, inicializa la lista ordenada
    setOrdered(festivals);
  }, [festivals]); // Asegura que se actualice cuando los festivales cambien

  const festivalsAsc = () => {
    // Ordena los festivales en orden ascendente
    const sortedFestivals = [...festivals].sort(
      (a, b) =>
        new Date(a.data_start).getTime() - new Date(b.data_start).getTime()
    );
    // Actualiza el estado con los festivales ordenados
    setOrdered(sortedFestivals);
  };

  const festivalsDesc = () => {
    // Ordena los festivales en orden descendente
    const sortedFestivals = [...festivals].sort(
      (a, b) =>
        new Date(b.data_start).getTime() - new Date(a.data_start).getTime()
    );
    // Actualiza el estado con los festivales ordenados
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
  }

  return (
    <section className="container mx-auto">
      <div className="bg-dark50 flex py-3 gap-3 justify-end px-5">
        <select className="select select-sm w-full max-w-xs" value={selectModality} onChange={filterByModality}>
        <option value="Todos" >Todos</option>
          <option value="Lindy Hop" >Lindy Hop</option>
          <option value="Blues" >Blues</option>
          <option value="Balboa" >Balboa</option>
        </select>
        <button className="btn btn-sm color_primary " onClick={festivalsAsc}>
          Asc
        </button>
        <button className="btn  btn-sm color_primary " onClick={festivalsDesc}>
          Desc
        </button>
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
