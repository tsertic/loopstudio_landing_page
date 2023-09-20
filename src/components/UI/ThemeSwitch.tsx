"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme");
    //check if there is prefers color scheme:dark and no theme in local storage , if true set light as starter theme
    if (
      !currentTheme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleThemeHandler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div
      className={` flex min-w-[60px]   z-[10] rounded-[15px] border-2 p-[2px] border-white/40 gap-[10px] cursor-pointer transition-universal`}
      onClick={toggleThemeHandler}
    >
      <div>
        <Image
          width={24}
          height={24}
          src="/images/icon-sun-moon.png"
          alt="dark mode"
          className={` transition-universal ${
            theme === "dark" ? "translate-x-[25px] rotate-180" : "translate-x-0"
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
