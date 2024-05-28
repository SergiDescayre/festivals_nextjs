"use client"
import { useEffect } from "react"
import { useFestivalContext } from "@/context/FestivalContext"
import { FestivalContextType } from "@/types/types" 
import CardFestival from "./CardFestival"

const ListFestivals = () => {

const {getFestivals ,festivals} = useFestivalContext() as FestivalContextType
useEffect (() => {
    getFestivals()
},[])

console.log(festivals)
  return (
    <div className = "flex  justify-center gap-4 bg-dark50 flex-wrap py-6">
        {festivals.map(fest => (
            <CardFestival fest = {fest} key={fest.docId} />
        ))}
    </div>
  )
}
export default ListFestivals
