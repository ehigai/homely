"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import searchIcon from "@/public/searchIcon.svg";
import logoIcon from "@/public/homeIcon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { DesktopNavigationMenu } from "./NavigationMenu";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(e: PointerEvent) {
      if (!isOpen) return;
      const target = e.target as Node | null;
      if (
        navRef.current &&
        toggleRef.current &&
        target &&
        !navRef.current.contains(target) &&
        !toggleRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);
  return (
    <header className="border py-4 px-2 fixed top-0 left-0 w-full bg-transparent z-10 text-white">
      <div className="container mx-auto border flex items-center justify-between">
        <div className="flex">
          <Image src={logoIcon} width={30} height={30} alt="Logo" />
        </div>
        {/* viewport={false} */}
        <NavigationMenu
          ref={navRef}
          className={clsx(
            "md:flex md:static",
            "bg-red-500 flex absolute top-0 left-0 w-4/5 h-screen shadow-sm flex-col gap-6 p-6 pt-20",
            "transform transition-transform duration-300 ease-out",
            {
              "translate-x-0 opacity-100 pointer-events-auto": isOpen,
              "-translate-x-full opacity-0 pointer-events-none": !isOpen,
              // ensure desktop is not affected by mobile toggling on click outside of nav
              "md:translate-x-0 md:opacity-100 md:bg-transparent md:shadow-none md:w-auto md:h-auto md:p-0 md:pt-0 md:flex-row md:gap-0":
                true,
            }
          )}
        >
          <DesktopNavigationMenu />
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Input
            type="search"
            className="md:hidden"
            placeholder="search properties..."
          />
          <div className="hidden md:block bg-secondary text-secondary-foreground rounded-md p-1.5">
            <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
          </div>
          <Button variant="secondary" className="hidden md:block font-semibold">
            Talk to an agent
          </Button>
        </div>
        <div
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 cursor-pointer md:hidden"
        >
          {isOpen ? (
            <X width={30} height={30} />
          ) : (
            <Menu width={30} height={30} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
