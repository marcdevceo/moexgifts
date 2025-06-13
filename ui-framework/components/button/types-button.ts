import { buttonVariantClass } from "./buttonVariant";

export type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  type?: "button" | "submit" | "reset";

  // 🔁 Now using a single variant key
  variant?: keyof typeof buttonVariantClass;

  // ⛔️ Removed size, padding, colorVariant — now part of the variant system
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>;
