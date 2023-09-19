import { ICreationCardData } from "@/types/index.t";
import React from "react";
import Image from "next/image";
interface ICreationCard {
  cardData: ICreationCardData;
}
export const CreationCard: React.FC<ICreationCard> = ({ cardData }) => {
  return (
    <div className="w-full h-[120px] md:max-w-[254px] md:h-[450px]  relative group cursor-pointer">
      <Image
        src={cardData.imgUrlDesktop}
        height={450}
        width={250}
        alt={cardData.text}
        className="w-full h-full hidden md:block group-hover:opacity-30"
      />
      <Image
        src={cardData.imgUrlMobile}
        height={120}
        width={327}
        alt={cardData.text}
        className="w-full h-full md:hidden object-cover"
      />
      <h3 className="absolute bottom-[32px] left-[40px] text-headingMMobile md:text-headingM uppercase text-white max-w-[165px] group-hover:text-black">
        {cardData.text}
      </h3>
    </div>
  );
};
