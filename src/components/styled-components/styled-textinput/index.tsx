import {
  TextInput as MantineTextInput,
  TextInputProps as MantineTextInputProps,
} from "@mantine/core";
import { defaultTheme } from "../../../styles/themes/default";

interface TextInputProps extends MantineTextInputProps {}

const StyledTextInput = ({ ...props }: TextInputProps) => {
  return (
    <MantineTextInput
      styles={{
        input: {
          backgroundColor: defaultTheme.colors["base-input"],
          border: `1px solid ${defaultTheme.colors["base-border"]}`,
          color: defaultTheme.colors["base-text"],

          "::placeholder": {
            color: defaultTheme.colors["base-label"],
          },
          ":focus": {
            border: `1px solid ${defaultTheme.colors["brand-blue"]}`,
          },
        },
      }}
      {...props}
    >
      {props.children}
    </MantineTextInput>
  );
};

export { StyledTextInput };
