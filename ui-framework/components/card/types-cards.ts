import { bgColorClass, paddingClass } from "../../theme";

export type BaseCardProps = {
  children: React.ReactNode;
  padding?: keyof typeof paddingClass;
  bg?: keyof typeof bgColorClass;
  rounded?: boolean;
  shadow?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;