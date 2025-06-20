import { BaseTextProps } from "./types-typography";
import { fontFamilyMap, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

export default function Subtitle({
  children,
  align = "left",
  color = "secondary",
  size = "subtitle",
  weight = "semibold",
  font = "subtitle",
  italic = false,
  className = "",
}: BaseTextProps) {
  return (
    <h2
      className={clsx(
        align === "left" ? "w-auto" : "w-full",
        fontSizeClass[size],
        fontFamilyMap[font],
        fontWeightClass[weight],
        textColorClass[color],
        textAlignClass[align],
        italic && "italic",
        className
      )}
    >
      {children}
    </h2>
  );
}
