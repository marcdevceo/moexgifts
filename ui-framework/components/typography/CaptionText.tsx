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
  className = "",
}: BaseTextProps) {
  return (
    <p
      className={clsx(
        "w-full",
        fontSizeClass[size],
        fontWeightClass[weight],
        fontFamilyClass[font],
        textColorClass[color],
        textAlignClass[align],
        className
      )}
    >
      {children}
    </p>
  );
}
