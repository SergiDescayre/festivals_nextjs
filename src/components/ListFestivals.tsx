"use client"
import { useEffect } from "react"
import { useFestivalContext } from "@/context/FestivalContext"
import { FestivalContextType } from "@/types/types" 

const ListFestivals = () => {

const {getFestivals ,festivals} = useFestivalContext() as FestivalContextType
useEffect (() => {
    getFestivals()
},[])

console.log(festivals)
  return (
    <div>
        festivals list
        {/* {festivals.map(fest => (
            <span key={fest.docId}>{fest.name}</span>
        ))} */}
    </div>
  )
}
export default ListFestivals
