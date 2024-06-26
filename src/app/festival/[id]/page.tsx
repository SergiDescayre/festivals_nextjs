"use client";
import Image from "next/image";
import { Params } from "@/types/types";
import { useEffect } from "react";
import { useFestivalContext } from "@/context/FestivalContext";
import { FestivalContextType, Festival } from "@/types/types";
import CountDawn from "@/components/CountDawn";
import DateFestival from "@/components/DateFestival";

interface Props {
  params: Params;
}

const page = ({ params }: Props) => {
  const { getFestivalByDocId, infoFestival } =
    useFestivalContext() as FestivalContextType;
  useEffect(() => {
    getFestivalByDocId(params.id);
  }, []);

  return (
    <div className="bg-dark50 min-h-[1200px]">
      {infoFestival && (
        <div className="w-full bg-zinc-800 text-secondary max-w-[1440px] mx-auto ">
          <div className="w-[80%] text-center flex items-center justify-between mx-auto">
            <span className="text-primary uppercase font-semibold mt-5 mb-3 md:text-2xl xl:text-4xl x:mb-5">
              {infoFestival.name}
            </span>
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
                  <CountDawn date={infoFestival.data_start} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-4  gap-3 md:ps-6  flex-grow ">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/assets/location.svg"
                    width={12}
                    height={12}
                    alt="location"
                  />
                  <span className="text-xs xl:text-base capitalize ">
                    {infoFestival.address} - {infoFestival.city} -{" "}
                    {infoFestival.CP}
                  </span>
                </div>

                <div className="flex gap-2 text-xs xl:text-base">
                  <Image
                    src="/assets/calendar.svg"
                    width={12}
                    height={12}
                    alt="calendar"
                  />
                  <DateFestival date={infoFestival.data_start} />
                </div>

                <div className="flex gap-2">
                  <Image
                    src="/assets/price.svg"
                    width={12}
                    height={12}
                    alt="price"
                  />
                  <span className="text-xs xl:text-base ">
                    Desde {infoFestival.minPrice} € hasta {infoFestival.maxPrice} €
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
