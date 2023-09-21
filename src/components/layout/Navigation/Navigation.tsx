"use client";
import { Logo } from "@/components/UI/Logo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/UI/Icons";
import { MobileModal } from "./MobileModal";
import { DesktopLinksList } from "./DesktopLinksList";
import ThemeSwitch from "@/components/UI/ThemeSwitch";
import Link from "next/link";

export const Navigation = () => {
  const [showNavM, setShowNavM] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      }
      if (window.scrollY < 40) {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <>
      <header
        className={`fixed w-full z-[20] ${
          isScrolled
            ? "bg-black/10 top-[0px] py-[16px] "
            : "top-[40px] md:top-[64px] "
        } transition-all duration-300`}
      >
        {isScrolled && (
          <div className="absolute right-0 bottom-0 top-0 left-0   backdrop-blur-sm  z-0"></div>
        )}
        <div
          className={`container-wide flex justify-between items-center z-[20] relative`}
        >
          <Link href="/" aria-label="homepage">
            <Logo
              width={192}
              height={32}
              className={`fill-white ${
                isScrolled && "w-[132px] h-[24px]"
              } transition-universal`}
            />
          </Link>
          <div className="flex gap-[20px] items-center max-md:hidden">
            <DesktopLinksList />

            <ThemeSwitch />
          </div>

          <button
            className="md:hidden cursor-pointer"
            onClick={() => setShowNavM(!showNavM)}
          >
            <Icons iconName="hamburger" className="w-[24px] fill-white" />
          </button>
        </div>
      </header>
      <MobileModal closeModal={() => setShowNavM(false)} showModal={showNavM} />
    </>
  );
};
