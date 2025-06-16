import {
  fontFamilyMap,
  fontSizeClass,
  fontWeightClass,
  textAlignClass,
  textColorClass,
} from "../../theme";
import clsx from "clsx";
import { BaseTextProps } from "./types-typography";

export default function CaptionText({
  children,
  align = "left",
  color = "neutral",
  size = "caption",
  weight = "normal",
  font = "clean",
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
