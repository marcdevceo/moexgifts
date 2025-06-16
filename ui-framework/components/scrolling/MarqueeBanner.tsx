"use client";

import {
  bgColorClass,
  displayClass,
  fontFamilyMap,
  fontSizeClass,
  overflowClass,
  paddingXClass,
  paddingYClass,
  positionClass,
  textColorClass,
  widthClass,
} from "@/ui-framework/theme";
import clsx from "clsx";

type Props = {
  message: string;
  speed?: number; // seconds for full scroll
  bg?: keyof typeof bgColorClass;
  color?: keyof typeof textColorClass;
  position?: keyof typeof positionClass;
  overflow?: keyof typeof overflowClass;
  width?: keyof typeof widthClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;
  display?: keyof typeof displayClass
  fontSize?: keyof typeof fontSizeClass;
  font?: keyof typeof fontFamilyMap;
  className?: string;
};

export default function MarqueeBanner({
  message,
  speed = 15,
  bg = "none",
  color = "neutral",
  position = "relative",
  overflow = "hidden",
  width = "full",
  px,
  py,
  display = "inlineBlock",
  fontSize = "md",
  font = "fancy",
  className = "",
}: Props) {
  return (
    <div
      className={clsx(
        bgColorClass[bg],
        positionClass[position],
        overflow && overflowClass[overflow],
        widthClass[width],
        px && paddingXClass[px],
        py && paddingYClass[py],
        className
      )}
    >
      <div
        className={clsx(
          textColorClass[color],
          displayClass[display],
          fontSizeClass[fontSize],
          fontFamilyMap[font],
          "whitespace-nowrap tracking-wide",
          className
        )}
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
      >
        {message}
      </div>
    </div>
  );
}
