import { BaseTextProps } from "./types-typography";
import { fontFamilyMap, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

export default function Title({
  children,
  align = "center",
  color = "primary",
  size = "title",
  weight = "bold",
  font = "fancy",
  className = "",
}: BaseTextProps) {
  return (
    <h1
      className={clsx(
        align === "left" ? "w-auto" : "w-full",
        fontSizeClass[size],
        fontFamilyMap[font],
        fontWeightClass[weight],
        textColorClass[color],
        textAlignClass[align],
        className
      )}
    >
      {children}
    </h1>
  );
}
