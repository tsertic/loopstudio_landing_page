import { Icons } from "@/components/UI/Icons";
import { Logo } from "@/components/UI/Logo";
import ThemeSwitch from "@/components/UI/ThemeSwitch";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
interface IMobileModal {
  closeModal: () => void;
  showModal: boolean;
}
export const MobileModal: React.FC<IMobileModal> = ({
  closeModal,
  showModal,
}) => {
  return (
    <div
      className={`${
        showModal ? "opacity-100 z-40 " : "opacity-0 z-[-20]"
      } fixed left-0 h-screen w-screen bg-primary  transition-all duration-300`}
    >
      <div className="absolute  top-[40px] container-wide  flex justify-between z-40 items-center">
        <Link href="/" aria-label="homepage">
          <Logo width={192} height={32} className="fill-primary-content" />
        </Link>
        <button
          onClick={closeModal}
          className="cursor-pointer "
          aria-label="close navigation"
        >
          <Icons iconName="close" className="w-[20px] h-[20px] fill-base-100" />
        </button>
      </div>
      <nav id="header-mobile-navigation" className="h-full ">
        <ul className=" h-full pl-[24px] flex flex-col  items-start justify-center gap-[24px]">
          {NAV_LINKS.map((link) => {
            return (
              <li key={link._id}>
                <Link
                  href={link.path}
                  aria-label={link.ariaLabel}
                  onClick={closeModal}
                  className="text-navMobile text-primary-content uppercase font-josefinsans "
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div
        className="bg-white/80 rounded-[20px] absolute bottom-[20px] left-[20px] z-[40]"
        role="theme switch container"
      >
        <ThemeSwitch />
      </div>
    </div>
  );
};
