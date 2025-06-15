"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarProps } from "./types-nav";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  textColorClass,
  fontSizeClass,
  fontWeightClass,
  hoverClass,
} from "../../theme";
import { FlexContainer } from "../containers";
import { useCartStore } from "../../store/cart-store";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import MobileNavCart from "./MobileNavCart";

export default function NavBarCart({
  children,
  bg = "accent",
  padding = "md",
  margin = "none",
  title = "",
  logo = "",
  titleHref = "/",
  logoHref = "#",
  links = [],
  ...rest
}: NavBarProps) {
  const pathname = usePathname();
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav
      className={clsx(
        bgColorClass[bg],
        paddingClass[padding],
        marginClass[margin],
        "sticky top-0 z-50"
      )}
      {...rest}
    >
      <FlexContainer alignItems="center" justify="between">
        {/* Logo or Title */}
        <FlexContainer
          className={clsx(
            fontSizeClass.xl,
            fontWeightClass.bold,
            textColorClass.primary
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
        </FlexContainer>

        {/* Desktop Navigation */}
        <FlexContainer
          justify="center"
          gap="md"
          className="hidden md:flex"
        >
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
                    : clsx(textColorClass.accent, hoverClass.textPrimary)
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </FlexContainer>

        <FlexContainer alignItems="center" className="hidden md:flex space-x-4">
          <Link href={"/checkout"} className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-black" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center text-white bg-blue-800 rounded-full text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </FlexContainer>

        {/* Mobile Navigation */}
        <MobileNavCart links={links} />
      </FlexContainer>

      {children}
    </nav>
  );
}
