"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown, Divide } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: NavItemProps) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <Button
          className={cn("px-4 py-2 text-sm font-medium transition-all", {
            "bg-blue-500 text-white": isOpen,
            "bg-gray-100 text-black hover:bg-gray-200": !isOpen,
          })}
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 ml-2 transition-transform text-muted-foreground",
              { "-rotate-180": isOpen, "text-black": !isOpen }
            )}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            { "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen }
          )}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          ></div>
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8  "></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
