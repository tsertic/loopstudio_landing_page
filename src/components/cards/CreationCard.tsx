import { ICreationCardData } from "@/types/index.t";
import React from "react";
import Image from "next/image";
interface ICreationCard {
  cardData: ICreationCardData;
}
export const CreationCard: React.FC<ICreationCard> = ({ cardData }) => {
  return (
    <div className="relative  w-full h-[120px] md:max-w-[254px] md:h-[450px] group cursor-pointer ">
      <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-black/20 z-10"></div>
      <Image
        src={cardData.imgUrlDesktop}
        height={450}
        width={254}
        alt={cardData.text}
        className="w-full h-full hidden md:block group-hover:opacity-30 transition-universal"
      />
      <Image
        src={cardData.imgUrlMobile}
        height={120}
        width={327}
        alt={cardData.text}
        className="w-full h-full md:hidden object-cover"
      />
      <h3 className="absolute bottom-[32px] left-[40px] z-20 text-headingMMobile md:text-headingM uppercase text-white max-w-[165px] group-hover:text-base-content transition-universal">
        {cardData.text}
      </h3>
    </div>
  );
};
