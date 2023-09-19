import { CreationCard } from "@/components/cards/CreationCard";
import { creationsCardItems } from "@/constants";
import Link from "next/link";
import React from "react";

export const Creations = () => {
  return (
    <div className="container-wide relative">
      <h2 className="text-headingLMobile md:text-headingL mb-[20px] uppercase">
        our creations
      </h2>

      <div className="flex max-md:flex-col flex-wrap gap-[30px] justify-between">
        {creationsCardItems.map((cardData) => {
          return <CreationCard cardData={cardData} key={cardData._id} />;
        })}
      </div>
      <Link
        href="#"
        aria-label="see all creations"
        className=" md:absolute md:right-0 md:top-0 uppercase text-[14px] leading-[100%] tracking-[5px] py-[13px] px-[40px] inline-block border-[1px] border-base-content"
      >
        see all
      </Link>
    </div>
  );
};
