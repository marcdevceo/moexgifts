import { BaseTextProps } from "./types-typography";
import { fontFamilyMap, textColorClass } from "../../theme";
import { fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

export default function BodyText({
  children,
  align = "left",
  color = "neutral",
  size = "body",
  weight = "normal",
  font = "body",
  italic = false,
  className = "",
}: BaseTextProps) {
  return (
    <p
      className={clsx(
        "w-auto",
        fontSizeClass[size],
        fontWeightClass[weight],
        fontFamilyMap[font],
        textColorClass[color],
        textAlignClass[align],
        italic && "italic",
        className
      )}
    >
      {children}
    </p>
  );
}
