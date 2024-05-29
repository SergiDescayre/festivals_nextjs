import Image from "next/image";
import { Festival } from "@/types/types";
import DateFestival from "./DateFestival";
import Link from "next/link";

interface Props {
  fest: Festival;
}

const CardFestival = ({ fest }: Props) => {
  return (
    <Link href={`/festival/${fest.docId}`}>
      <div className="cursor-pointer shadow-xl  ease-in-out rounded-md min-w-64 border-2 border-transparent  text-primary overflow-hidden hover:border-2 hover:border-secondary">
        <div
          className="relative flex items-end justify-end h-[180px] bg-cover bg-center"
          style={{ backgroundImage: "url(" + fest.img + ")" }}
        >
          <div className="flex"></div>
        </div>
        <div className=" bg-dark75">
          <div className="flex items-center justify-between p-3 gap-2">
            <div>
              <h2 className="uppercase w-[225px]  font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis  ">
                {fest.name}
              </h2>
              <span className="capitalize text-sm text-secondary ">
                {fest.city}
              </span>
            </div>
          </div>
          <div className="px-3 flex flex-col gap-2 py-4 text-secondary">
            <div className="flex gap-2">
              <Image
                src="/assets/location.svg"
                width={12}
                height={12}
                alt="location"
              />
              <span className="text-xs ">{fest.address}</span>
            </div>

            <div className="flex gap-2 text-xs">
              <Image
                src="/assets/calendar.svg"
                width={12}
                height={12}
                alt="calendar"
              />
              <DateFestival date={fest.data_start} />
            </div>

            <div className="flex gap-2">
              <Image
                src="/assets/price.svg"
                width={12}
                height={12}
                alt="price"
              />
              <span className="text-xs">{fest.minPrice} €</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardFestival;
