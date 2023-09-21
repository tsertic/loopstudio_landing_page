import { FOOTER_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

export const FooterNav = () => {
  return (
    <nav id="footer-navigation" role="navigation">
      <ul className="flex gap-[16px] md:gap-[32px] flex-col md:flex-row items-center md:items-start">
        {FOOTER_LINKS.map((link) => {
          return (
            <li key={link._id}>
              <Link
                href={link.path}
                aria-label={link.ariaLabel}
                key={link._id}
                className=" link-hover capitalize"
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
