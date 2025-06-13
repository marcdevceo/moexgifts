import clsx from "clsx";
import Link from "next/link";
import { BaseButtonProps } from "./types-button";
import { buttonVariantClass } from "./buttonVariant";

export default function Button({
  children,
  onClick,
  href,
  target = "_self",
  type = "button",
  variant = "primaryresp",
  disabled = false,
  isLoading = false,
  loadingText = "Loading...",
  className = "",
  ...rest
}: BaseButtonProps) {
  const baseStyles = clsx(
    "inline-flex items-center justify-center transition duration-150 ease-in-out",
    buttonVariantClass[variant],
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
    },
    className
  );

  const content = isLoading ? loadingText : children;

  if (href && (href.startsWith("http") || href.startsWith("mailto:"))) {
    return (
      <a
        href={href}
        target={target}
        className={baseStyles}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        className={baseStyles}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseStyles}
      disabled={disabled || isLoading}
      {...rest}
    >
      {content}
    </button>
  );
}



