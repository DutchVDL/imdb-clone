import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkmodeSwitch from "./DarkmodeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-4">
      <div className="flex ">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div>
        <div className="flex items-center space-x-5">
          <DarkmodeSwitch />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
                IMDb
              </span>
              <span className="text-xl hidden sm:inline">Clone</span>
            </h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
