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
import { ScrollingProps } from "./types-scrolling";

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
}: ScrollingProps) {
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
