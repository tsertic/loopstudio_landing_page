import React from "react";
import Image from "next/image";
export const About = () => {
  return (
    <div className="container-wide relative">
      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <Image
          src="/images/desktop/image-interactive.jpg"
          width={731}
          height={500}
          alt="man wearing vr headset"
          className="max-md:mb-[48px]"
        />
        <div className="md:absolute bottom-0 right-0 max-w-[541px] bg-base-100 md:pl-[96px] md:pt-[96px] max-md:text-center">
          <h2 className="text-headingLMobile md:text-headingL uppercase font-josefinsans mb-[16px] md:mb-[25px]">
            The leader in interactive VR
          </h2>
          <p className="text-base-content/60">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};
