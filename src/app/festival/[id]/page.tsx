"use client";
import { Params } from "@/types/types";
import { useEffect } from "react";
import { useFestivalContext } from "@/context/FestivalContext";
import { FestivalContextType, Festival } from "@/types/types";
import CountDawn from "@/components/CountDawn";
import DateFestivalHorizontal from "@/components/DateFestivalHorizontal";

import ButtonComeBack from "@/components/ButtonComeBack";

interface Props {
  params: Params;
}

const page = ({ params }: Props) => {
  const { getFestivalByDocId, infoFestival } =
    useFestivalContext() as FestivalContextType;
  useEffect(() => {
    getFestivalByDocId(params.id);
  }, []);
  console.log(infoFestival);

  return (
    <div className="bg-dark50 min-h-[1000px]">
      {infoFestival && (
        <div className="w-full bg-zinc-800 text-secondary max-w-[1440px] mx-auto ">
          <div className="w-[80%] text-center flex items-center justify-between mx-auto">
            <span className="text-primary uppercase font-semibold mt-5 mb-3 md:text-2xl xl:text-4xl x:mb-5">
              {infoFestival.name}
            </span>
            <ButtonComeBack />
          </div>

          <div className="flex flex-col md:flex-row w-[80%] md:align-center max-w-[1440px] mx-auto">
            <div className="mb-4">
              <div className="relative transition duration-300 ease-in-out">
                <a href={infoFestival.link} target="_blank">
                  <img
                    src={infoFestival.img}
                    alt="image"
                    className="cursor-pointer overflow-hidden md:object-cover md:h-[320px] md:w-[420px]  lg:w-[520px]  xl:w-[620px] xl:h-[400px]  mx-auto rounded-lg border-2 border-transparent hover:border-2 hover:border-secondary   "
                  />
                </a>
              </div>
              <div className="md:flex md:justify-between">
                <div className="xl:pt-3 md:-ms-5">
                  <CountDawn
                    date={infoFestival.data_start}
                    docId={infoFestival.docId}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-4  gap-3 md:ps-6  flex-grow ">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  {/* <img className="w-4 lg:w-6" src={location} alt="" /> */}
                  <span className="text-xs xl:text-base capitalize ">
                    {infoFestival.address} - {infoFestival.city} -{" "}
                    {infoFestival.CP}
                  </span>
                </div>

                <div className="flex gap-2 text-xs xl:text-base">
                  {/* <img className="w-4 lg:w-6" src={calendar} alt="" /> */}
                  <DateFestivalHorizontal
                    dateStart={infoFestival.data_start}
                    dateEnd={infoFestival.data_end}
                  />
                </div>

                <div className="flex gap-2">
                  {/* <img className="w-4 lg:w-6" src={price} alt="price" /> */}
                  <span className="text-xs xl:text-base ">
                    {infoFestival.minPrice} €{infoFestival.maxPrice} €
                  </span>
                </div>
              </div>

              <div>
                <span className="block mt-5 mb-2  xl:text-xl text-primary">
                  Modalidades
                </span>
                <ul>
                  {infoFestival.modality.map((item, index) => (
                    <li key={index} className="text-xs xl:text-base ms-2">
                      {" "}
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>

              {infoFestival.listOfTeachers.length > 0 && (
                <div>
                  <span className="block mt-5 mb-2  xl:text-xl text-primary">
                    Profesores
                  </span>
                  <ul>
                    {infoFestival.listOfTeachers.map((item, index) => (
                      <li key={index} className="text-xs xl:text-base ms-2">
                        {" "}
                        - {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div
            id="content_quill"
            className=" w-[80%] max-w-[1440px] mx-auto  mt-4"
          >
            <span className="text-primary xl:text-xl">Descripción</span>
            <div
              className="text-justify mt-2 text-xs xl:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: infoFestival.contentQuill }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
