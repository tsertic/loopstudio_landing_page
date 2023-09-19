"use client";
import { Logo } from "@/components/UI/Logo";
import React, { useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/UI/Icons";
import { MobileModal } from "./MobileModal";
import { DesktopLinksList } from "./DesktopLinksList";

export const Navigation = () => {
  const [showNavM, setShowNavM] = useState(false);
  return (
    <>
      <header className="fixed w-full top-[40px] md:top-[64px] z-[10]">
        <div className="container-wide flex justify-between items-center">
          <div>
            <Logo width={192} height={32} dark={false} />
          </div>
          <DesktopLinksList />
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setShowNavM(!showNavM)}
          >
            <Icons iconName="hamburger" className="w-[24px] fill-base-100" />
          </div>
        </div>
      </header>
      <MobileModal closeModal={() => setShowNavM(false)} showModal={showNavM} />
    </>
  );
};
