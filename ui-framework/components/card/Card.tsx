import clsx from "clsx";
import { BaseCardProps } from "./types-cards";
import { bgColorClass, paddingClass } from "../../theme";

export default function Card({
  children,
  padding = "md",
  bg = "accent",
  rounded = true,
  shadow = true,
  className = "",
  ...rest
}: BaseCardProps) {
  return (
    <div
      className={clsx(
        "h-full w-full flex-col",
        paddingClass[padding],
        bgColorClass[bg],
        rounded && "rounded-lg",
        shadow && "shadow-lg",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
