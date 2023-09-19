import { ICreationCardData } from "@/types/index.t";
import React from "react";
import Image from "next/image";
interface ICreationCard {
  cardData: ICreationCardData;
}
export const CreationCard: React.FC<ICreationCard> = ({ cardData }) => {
  return (
    <div className="w-full h-[120px] md:max-w-[254px] md:h-[450px]  relative">
      <Image
        src={cardData.imgUrlDesktop}
        height={450}
        width={250}
        alt={cardData.text}
        className="w-full h-full"
      />
      <h3 className="absolute bottom-[20px] left-[20px]">{cardData.text}</h3>
    </div>
  );
};
