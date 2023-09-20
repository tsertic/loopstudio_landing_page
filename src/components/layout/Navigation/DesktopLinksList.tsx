import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

export const DesktopLinksList = () => {
  return (
    <nav className="flex max-md:hidden gap-[32px] justify-between">
      {NAV_LINKS.map((link) => {
        return (
          <Link
            href={link.path}
            aria-label={link.ariaLabel}
            key={link._id}
            className=" text-white text-nav capitalize link-hover"
          >
            {link.text}
          </Link>
        );
      })}
    </nav>
  );
};
