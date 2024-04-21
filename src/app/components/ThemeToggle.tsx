"use client";
"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className="flex w-10 h-5 rounded-3xl cursor-pointer justify-between items-center  relative mt-2"
      style={{ backgroundColor: theme === "light" ? "#808080" : "#333" }}
      onClick={toggle}
    >
      <Image src="/images/moon.png" alt="moon" width={14} height={14} />
      <div
        className="w-4 h-4 rounded-full bg-white absolute left-1"
        style={{
          transition: "left 0.3s",
          left: theme === "light" ? "0" : "50%", // Move the ball to left or right based on theme
        }}
      ></div>
      <Image src="/images/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
