"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown, Divide } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
            <div className="mx-auto max-w-7xl px-8  ">
              <div className="grid grid-col-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8 ">
                  {category.featured.map((item) => (
                    <div
                      key={item.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          src={item.imageSrc}
                          alt="product category image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-600"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop Now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
