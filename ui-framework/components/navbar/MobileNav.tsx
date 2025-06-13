"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import Card from "../card/Card";

import {
  bgColorClass,
  textColorClass,
  fontWeightClass,
  paddingClass,
  shadowClass,
  borderColorClass,
  colorVariantClass,
} from "../../theme";
import { MobileNavProps } from "./types-nav";



export default function MobileNav({ links = [] }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={clsx(textColorClass.primary, "transition")}
        aria-label="Toggle mobile navigation"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slideout Menu */}
      {open && (
        <div
          className={clsx(
            "absolute top-16 left-0 right-0 z-50 flex flex-col items-center gap-4",
            paddingClass.md,
            bgColorClass.primary,
            borderColorClass.primary,
            "border-t",
            shadowClass.lg
          )}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="w-full"
              >
                <Card
                  className={clsx(
                    "w-full text-center cursor-pointer transition-colors",
                    isActive
                      ? clsx(
                          textColorClass.accent,
                          fontWeightClass.semibold
                        )
                      : clsx(
                          colorVariantClass.accent
                        )
                  )}
                  padding="sm"
                  rounded
                >
                  {link.label}
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

