import React from "react";
import { FooterSocial } from "./FooterSocial";
import { Logo } from "@/components/UI/Logo";
import { FooterNav } from "./FooterNav";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-[56px] md:py-[43px]">
      <div className="container-wide flex flex-col max-md:gap-[48px] md:flex-row md:justify-between max-md:px-[51px] ">
        <div>
          <div className="mb-[32px] md:mb-[24px] flex w-full max-md:justify-center">
            <Logo width={144} height={24} className="fill-primary-content" />
          </div>
          <FooterNav />
        </div>
        <div className="flex flex-col justify-between items-center md:items-end gap-[16px]">
          <FooterSocial />

          <p className="text-primary-content/50 ">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
