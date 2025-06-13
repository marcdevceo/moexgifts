import { BaseTextProps } from "./types-typography";
import { textColorClass } from "../../theme";
import { fontFamilyClass, fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

export default function Subtitle({
  children,
  align = "left",
  color = "secondary",
  size = "subtitle",
  weight = "semibold",
  font = "heading",
  className = "",
}: BaseTextProps) {
  return (
    <h2
      className={clsx(
        align === "left" ? "w-auto" : "w-full",
        fontSizeClass[size],
        fontFamilyClass[font],
        fontWeightClass[weight],
        textColorClass[color],
        textAlignClass[align],
        className
      )}
    >
      {children}
    </h2>
  );
}
