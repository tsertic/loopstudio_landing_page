import React from "react";
interface IProjectIcons {
  iconName: "hamburger" | "close" | "facebook" | "pinterest" | "twitter";
  className: string;
}
export const Icons: React.FC<IProjectIcons> = ({ iconName, className }) => {
  const style = className;
  switch (iconName) {
    case "hamburger":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 16"
          className={style}
        >
          <g fillRule="evenodd">
            <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
          </g>
        </svg>
      );
    case "close":
      return (
        <svg
          viewBox="0 0 20 20"
          className={style}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
            fillRule="evenodd"
          />
        </svg>
      );
    default:
      throw new Error("invalid icon");
  }
};
