import {
  fontFamilyClass,
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
  font = "sans",
  italic = false,
  className = "",
}: BaseTextProps) {
  return (
    <p
      className={clsx(
        "w-auto",
        fontSizeClass[size],
        fontWeightClass[weight],
        fontFamilyClass[font],
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
