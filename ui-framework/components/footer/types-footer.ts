import {
  bgColorClass,
  paddingClass,
  marginClass,
  maxWidthClass,
  textAlignClass,
  fontSizeClass,
  fontWeightClass,
  overflowClass,
  paddingYClass,
  paddingXClass,
  marginXClass,
  marginYClass,
} from "../../theme";

export type BaseFooterProps = {
  children?: React.ReactNode;

  // 🎨 Visual
  bg?: keyof typeof bgColorClass;
  overflow?: keyof typeof overflowClass;

  // 📐 Layout
  maxWidth?: keyof typeof maxWidthClass;
  textAlign?: keyof typeof textAlignClass;

  // 🧾 Typography
  fontSize?: keyof typeof fontSizeClass;
  fontWeight?: keyof typeof fontWeightClass;

  // 📦 Spacing - Padding
  padding?: keyof typeof paddingClass;
  pt?: keyof typeof paddingClass;
  pb?: keyof typeof paddingClass;
  px?: keyof typeof paddingXClass;
  py?: keyof typeof paddingYClass;

  // 📦 Spacing - Margin
  margin?: keyof typeof marginClass;
  mt?: keyof typeof marginClass;
  mb?: keyof typeof marginClass;
  mx?: keyof typeof marginXClass;
  my?: keyof typeof marginYClass;

  // 📛 Branding
  companyName?: string;
  logo?: string;

  // 🧩 Native HTML props
} & React.HTMLAttributes<HTMLElement>;

