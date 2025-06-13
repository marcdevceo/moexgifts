import Image from "next/image";
import clsx from "clsx";
import { BaseFooterProps } from "./types-footer";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  textAlignClass,
  fontWeightClass,
  fontSizeClass,
  maxWidthClass,
} from "../../theme";

import { BlockContainer } from "../containers";
import BodyText from "../typography/BodyText";
import CaptionText from "../typography/CaptionText";

export default function Footer({
  children,
  bg = "neutral",
  margin,
  mt, 
  padding,
  px,
  py,
  companyName = "",
  logo = "",
  textAlign = "center",
  fontWeight = "bold",
  fontSize = "sm",
  maxWidth = "xl",
  ...rest
}: BaseFooterProps) {
  return (
    <footer
      className={clsx(
        bgColorClass[bg],
        mt && marginClass[mt],
        padding && paddingClass[padding],
        px && paddingClass[px],
        py && paddingClass[py],
      )}
      {...rest}
    >
      <BlockContainer
        className={clsx(
          "container",
          maxWidthClass[maxWidth],
          textAlignClass[textAlign],
          fontWeightClass[fontWeight]
        )}
      >
        <BodyText className={fontSizeClass[fontSize]}>
          &copy; {new Date().getFullYear()} {companyName}{" "}
          {logo ? (
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="h-8 w-auto inline-block"
            />
          ) : null}{" "}
          All rights reserved.
        </BodyText>

        <CaptionText
          className={clsx(
            fontSizeClass.xs,
            margin && marginClass[margin] || "mt-2" // fallback
          )}
        >
          Built with ❤️ using Next.js and Tailwind CSS.
        </CaptionText>
      </BlockContainer>
      {children}
    </footer>
  );
}

