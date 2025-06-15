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
import { BlockContainer, FlexContainer } from "../containers";
import { useCartStore } from "../../store/cart-store";
import { BodyText } from "../typography";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import MobileNavCart from "./MobileNavCart";

export default function NavBarCart({
  children,
  bg = "accent",
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
        <div className="hidden md:flex justify-center w-full sm:w-auto gap-4 sm:gap-6 ">
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
        </div>

        <FlexContainer alignItems="center" className="hidden md:flex">
          <BlockContainer>
            <Link href={"/checkout"}>
              <ShoppingCartIcon
                title="Shopping Cart"
                className="w-6 h-6 text-black"
              />
            </Link>
          </BlockContainer>
          <BlockContainer>
            {cartCount > 0 && (
              <BodyText size="sm" color="dark">
                <span className="transition-transform duration-150 ease-in-out group-hover:scale-110">
                  {cartCount}
                </span>
              </BodyText>
            )}
          </BlockContainer>
        </FlexContainer>

        {/* Mobile Navigation */}
        <MobileNavCart links={links} />
      </div>

      {children}
    </nav>
  );
}
