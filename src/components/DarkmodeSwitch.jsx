"use client";

import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const DarkmodeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="cursor-pointer hover:text-amber-500 hover:text-2xl transition-all duration-300"
        />
      ) : (
        <BsMoonFill
          onClick={() => setTheme("dark")}
          className="cursor-pointer hover:text-amber-500 hover:text-2xl transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkmodeSwitch;
