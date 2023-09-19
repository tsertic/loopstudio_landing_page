"use client";
import { Logo } from "@/components/UI/Logo";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/UI/Icons";
import { MobileModal } from "./MobileModal";

export const Navigation = () => {
  const [showNavM, setShowNavM] = useState(false);
  return (
    <>
      <header className="absolute w-full top-[40px] lg:top-[64px] ">
        <div className="container-wide flex justify-between items-center">
          <div>
            <Logo width={192} height={32} fill="base-content" />
          </div>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setShowNavM(!showNavM)}
          >
            <Icons iconName="hamburger" className="fill-red-500 w-[24px]" />
          </div>
        </div>
      </header>
      <MobileModal closeModal={() => setShowNavM(false)} showModal={showNavM} />
    </>
  );
};
