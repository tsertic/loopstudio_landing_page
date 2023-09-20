import React from "react";
import Image from "next/image";
export const Hero = () => {
  return (
    <div className="relative w-full max-md:h-screen max-md:flex max-md:items-center  md:pt-[226px] md:pb-[146px]">
      <div className="md:hidden absolute top-0 left-0 bottom-0 right-0 z-[-1]">
        <Image
          src="/images/mobile/image-hero.jpg"
          width={375}
          height={650}
          alt="hero image"
          className="w-full h-full"
        />
      </div>
      <div className="max-md:hidden absolute top-0 left-0 bottom-0 right-0 z-[-1]">
        <Image
          src="/images/desktop/image-hero.png"
          width={1440}
          height={650}
          alt="hero image"
          className="w-full h-full"
        />
      </div>
      <div className="container-wide">
        <div className="p-[24px] md:p-[40px] md:pb-[26px] border-[2px] border-white text-white w-full md:max-w-[650px] ">
          <h1 className=" text-headingXLMobile md:text-headingXL uppercase  ">
            Immersive
            <br />
            experiences <br />
            that deliver
          </h1>
        </div>
      </div>
    </div>
  );
};
