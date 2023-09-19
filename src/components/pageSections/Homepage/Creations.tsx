import { CreationCard } from "@/components/cards/CreationCard";
import { creationsCardItems } from "@/constants";
import React from "react";

export const Creations = () => {
  return (
    <div className="container-wide">
      <h2 className="text-headingLMobile md:text-headingL mb-[20px]">
        our creations
      </h2>
      <div className="flex max-md:flex-col flex-wrap gap-[30px] justify-between">
        {creationsCardItems.map((cardData) => {
          return <CreationCard cardData={cardData} key={cardData._id} />;
        })}
      </div>
    </div>
  );
};
