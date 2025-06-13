import { BaseTextProps } from "./types-typography";
import { textColorClass } from "../../theme";
import { fontFamilyClass, fontSizeClass, fontWeightClass, textAlignClass } from "../../theme";
import clsx from "clsx";

export default function BodyText({
  children,
  align = "left",
  color = "neutral",
  size = "body",
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
