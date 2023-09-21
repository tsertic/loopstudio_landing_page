import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

export const DesktopLinksList = () => {
  return (
    <nav>
      <ul className="flex  gap-[32px] justify-between">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link._id}>
              <Link
                href={link.path}
                aria-label={link.ariaLabel}
                className=" text-white text-nav capitalize link-hover"
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
