"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    //check if there is prefers color scheme:dark and no theme in local storage , if true set light as starter theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <></>;
};

export default ThemeSwitch;
