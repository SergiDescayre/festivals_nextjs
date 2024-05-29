"use client";

import { createContext, useContext, useState } from "react";
import appFirebase from "../credentials";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

import { Festival, FestivalContextType } from "@/types/types";

const FestivalContext = createContext<FestivalContextType>({
  festivals: [],
  infoFestival: null,
  isFoundFestival: true,
  contentQuill: "",
  setContentQuill: () => {},
  setInfoFestival: () => {},
  setFestivals: () => {},
  getFestivalByDocId: () => Promise.resolve(),
  getFestivals: () => Promise.resolve(),
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [infoFestival, setInfoFestival] = useState<Festival | null>(null);
  const [isFoundFestival, setIsFoundFestival] = useState<boolean>(true);
  const [contentQuill, setContentQuill] = useState<string>("");

  // Get festival by document ID
  const getFestivalByDocId = async (docId: string) => {
    const db = getFirestore(appFirebase);
    try {
      const docRef = doc(db, "festivals", docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const festivalData = docSnap.data() as Festival;
        setInfoFestival(festivalData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting festival by docId:", error);
    }
  };

  // Get all festivals
  const getFestivals = async () => {
    const db = getFirestore(appFirebase);
    try {
      const querySnapshot = await getDocs(collection(db, "festivals"));
      const arrayFestivals = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as Festival),
      }));
      setFestivals(arrayFestivals);
    } catch (error) {
      console.error("Error getting festivals:", error);
    }
  };

  return (
    <FestivalContext.Provider
      value={{
        festivals,
        infoFestival,
        isFoundFestival,
        contentQuill,
        setContentQuill,
        setInfoFestival,
        setFestivals,
        getFestivalByDocId,
        getFestivals,
      }}
    >
      {children}
    </FestivalContext.Provider>
  );
};
export default ContextProvider;

export const useFestivalContext = () => useContext(FestivalContext);
