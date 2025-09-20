"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import searchIcon from "@/public/searchIcon.svg";
import logoIcon from "@/public/homeIcon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { DesktopNavigationMenu, MobileNavigationMenu } from "./NavigationMenu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { fontJakartaSans } from "@/app/ui/fonts";

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
        NavigationMenu;
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);
  return (
    <header className="py-6 px-3 fixed top-0 left-0 w-full bg-transparent z-10 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-2xl">
          <Image src={logoIcon} width={26} height={30} alt="Logo" />
          <div className={`${fontJakartaSans} hidden md:block font-bold`}>
            Homely
          </div>
        </div>

        <DesktopNavigationMenu />

        <nav
          ref={navRef}
          className={clsx(
            "md:hidden bg-red-500 flex flex-col gap-6 p-6 pt-20 fixed top-0 left-0 w-4/5 h-screen shadow-sm z-40",
            "transition-all duration-300 ease-out",
            {
              "translate-x-0 opacity-100 pointer-events-auto": isOpen,
              "-translate-x-full opacity-0 pointer-events-none": !isOpen,
            }
          )}
        >
          <MobileNavigationMenu />
        </nav>

        <div className="flex items-center gap-3">
          <Input
            type="search"
            className={clsx(
              "md:hidden",
              "!placeholder-white/60",
              "!aria-invalid:ring-white/20",
              "!dark:aria-invalid:ring-white/40",
              "aria-invalid:border-destructive"
            )}
            placeholder="search properties..."
          />

          <Button
            variant="secondary"
            className="hidden md:block bg-secondary text-secondary-foreground px-2"
            size="lg"
          >
            <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
          </Button>

          <Button
            variant="secondary"
            className="hidden md:block font-semibold"
            size="lg"
          >
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
