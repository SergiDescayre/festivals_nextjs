export interface Festival {
    name:string,
    city:string,
    address:string,
    CP:string,
    contentQuill : string,
    data_start:string,
    data_end:string,
    img:string,
    link:string,
    listOfTeachers:string[],
    modality:string[],
    minPrice:string,
    maxPrice:string,
    docId:string
}

export interface FestivalContextType {
    festivals: Festival[];
    infoFestival: Festival | null;
    isFoundFestival: boolean;
    contentQuill: string;
    setContentQuill: (content: string) => void;
    setInfoFestival: (festival: Festival | null) => void;
    setIsFoundFestival: (isFound: boolean) => void;
    setFestivals: (festivals: Festival[]) => void;
    getFestivalByDocId: (docId: string) => Promise<void>;
    getFestivals: () => Promise<void>;
    getFilterModality: (modalityFilter: string) => Festival[];
  }
