import { Icons } from "@/components/UI/Icons";
import { Logo } from "@/components/UI/Logo";
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
      <div className="absolute top-[40px] container-wide flex justify-between items-center ">
        <Logo width={192} height={32} fill="primary-content" />
        <div onClick={closeModal} className="cursor-pointer">
          {" "}
          <Icons
            iconName="close"
            className="w-[20px] h-[20px] fill-primary-content"
          />
        </div>
      </div>
    </div>
  );
};
