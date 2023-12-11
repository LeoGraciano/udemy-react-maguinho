import { TextField, TextFieldProps } from "@mui/material";
import { useField } from "@unform/core";
import { useEffect, useState } from "react";

type CustomTextFieldProps = TextFieldProps & {
  name: string;
};

export const CustomTextInput = ({ name, ...props }: CustomTextFieldProps) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name);

  const [value, setValue] = useState(defaultValue || "");

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [registerField, fieldName, value]);

  return (
    <TextField
      {...props}
      id={`id_${name}`}
      inputProps={{ "data-testid": `id_${name}` }}
      error={!!error}
      defaultValue={defaultValue}
      onKeyDown={() => (error ? clearError() : undefined)}
      helperText={error}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
