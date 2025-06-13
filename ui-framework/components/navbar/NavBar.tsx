"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarProps } from "./types-nav";
import MobileNav from "./MobileNav";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  textColorClass,
  fontSizeClass,
  fontWeightClass,
  hoverClass,
} from "../../theme";

export default function NavBar({
  children,
  bg = "neutral",
  padding = "md",
  margin = "none",
  title = "",
  logo = "",
  titleHref = "#",
  logoHref = "#",
  links = [],
  ...rest
}: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        bgColorClass[bg],
        paddingClass[padding],
        marginClass[margin]
      )}
      {...rest}
    >
      <div className="flex items-center justify-between">
        {/* Logo or Title */}
        <div
          className={clsx(
            fontSizeClass.xl,
            fontWeightClass.bold,
            textColorClass.primary,
            "text-center"
          )}
        >
          {logo ? (
            <Link href={logoHref}>
              <Image
                src={logo}
                alt="Logo"
                width={50}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
          ) : title ? (
            <Link
              href={titleHref}
              className={clsx(textColorClass.primary, hoverClass.textAccent)}
            >
              {title}
            </Link>
          ) : null}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center w-full sm:w-auto gap-4 sm:gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-colors",
                  fontSizeClass.sm,
                  fontWeightClass.medium,
                  isActive
                    ? textColorClass.primary
                    : clsx(textColorClass.secondary, hoverClass.textPrimary)
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <MobileNav links={links} />
      </div>

      {children}
    </nav>
  );
}

