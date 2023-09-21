import { Button } from "@/components/UI/Button";
import { CreationCard } from "@/components/cards/CreationCard";
import { creationsCardItems } from "@/constants";
import Link from "next/link";
import React from "react";

export const Creations = () => {
  return (
    <div className="container-wide relative">
      <h2 className="text-headingLMobile md:text-headingL max-md:text-center mb-[48px] md:mb-[80px] uppercase">
        our creations
      </h2>

      <div className="flex max-md:flex-col max-md:mb-[34px] flex-wrap gap-[30px] justify-between">
        {creationsCardItems.map((cardData) => {
          return <CreationCard cardData={cardData} key={cardData._id} />;
        })}
      </div>
      <div className="md:absolute md:right-0 md:top-0 md:w-fit text-center">
        <Button href="#" ariaLabel="see all">
          see all
        </Button>
      </div>
    </div>
  );
};
