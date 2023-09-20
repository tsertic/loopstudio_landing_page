import { Icons } from "@/components/UI/Icons";
import { SOCIAL_ICONS } from "@/constants";
import React from "react";
export const FooterSocial = () => {
  return (
    <div className="flex gap-[16px] ">
      {SOCIAL_ICONS.map((icon) => {
        return (
          <a
            href={icon.path}
            aria-label={icon.iconName}
            className="link-hover after:w-[100%] "
            key={icon._id}
          >
            <Icons
              iconName={icon.iconName}
              className="w-[24px] h-[24px] fill-primary-content"
            />
          </a>
        );
      })}
    </div>
  );
};
