import React from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MenuIcon } from "@/components/icons/menuIcon";

const header = () => {
  return (
    <div className="flex align-middle justify-between h-20 px-4 border-b border-b-gray-200 dark:border-b-gray-800">
      <div className="my-auto min-w-sm bg-red-500">
        <Logo />
      </div>
      <Navigation />
      <div className="flex justify-end my-auto gap-4 min-w-sm bg-red-500">
        <Button className="my-auto">Order Now</Button>
        <ThemeToggle />
        <MenuIcon className="h-12 w-12 text-black dark:text-white" />
      </div>
    </div>
  );
};

export default header;
