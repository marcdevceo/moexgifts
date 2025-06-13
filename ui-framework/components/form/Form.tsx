import clsx from "clsx";
import { BaseFormProps } from "./types-forms";
import {
  bgColorClass,
  paddingClass,
  marginClass,
  borderRadiusClass,
  textColorClass,
  fontSizeClass,
  fontWeightClass,
  shadowClass,
} from "../../theme";
import { Subtitle } from "../typography";
import { FlexContainer } from "../containers";
import { Button } from "../button";

export default function Form({
  fields = [],
  title = "Form",
  buttonTitle = "Submit",
  bg = "accent",
  padding = "lg",
  margin = "none",
  ...rest
}: BaseFormProps) {
  return (
    <form
      className={clsx(
        bgColorClass[bg],
        paddingClass[padding],
        marginClass[margin],
        borderRadiusClass.lg,
        shadowClass.md,
        "w-full"
      )}
      {...rest}
    >
      <Subtitle align="center">{title}</Subtitle>

      {fields.map((field) => (
        <FlexContainer key={field.name} flexDirection="column" padding="md">
          <label
            htmlFor={field.name}
            className={clsx("sr-only", fontSizeClass.body, fontWeightClass.medium)}
          >
            {field.label}
          </label>

          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            className={clsx(
              "block w-full focus:outline-none focus:ring-2",
              borderRadiusClass.md,
              paddingClass.md,
              bgColorClass.neutral,
              textColorClass.accent,
              shadowClass.sm,
              "focus:border-primary focus:ring-primary"
            )}
            required={field.required}
          />
        </FlexContainer>
      ))}

      <Button type="submit" variant="secondary" className="w-full">
        {buttonTitle}
      </Button>
    </form>
  );
}

