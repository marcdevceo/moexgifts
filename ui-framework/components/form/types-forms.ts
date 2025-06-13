import {
  bgColorClass,
  marginClass,
  paddingClass,
  colorVariantClass,
} from "../../theme";

export type BaseInputProps = {
  name: string;
  label?: string;
  type: "email" | "password" | "text";
  placeholder: string;
  className?: string;
  required?: boolean;
  button?: {
    name: string;
    variant: keyof typeof colorVariantClass;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export type BaseFormProps = {
  fields?: BaseInputProps[];
  title?: string;
  buttonTitle?: string;
  bg?: keyof typeof bgColorClass;
  padding?: keyof typeof paddingClass;
  margin?: keyof typeof marginClass;
};
