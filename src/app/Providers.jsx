"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-all duration-700 min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
