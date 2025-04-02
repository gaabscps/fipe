"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

interface CustomSelectProps extends Omit<SelectProps, "variant"> {
  label: string;
  options: { value: string; label: string }[];
}

export const CustomSelect = ({
  label,
  options,
  ...props
}: CustomSelectProps) => (
  <FormControl fullWidth>
    <InputLabel
      id={`${label}-label`}
      sx={{
        backgroundColor: "white",
        padding: "0",
        "&.MuiInputLabel-shrink": {
          top: "10px",
          color: "#666",
        },
      }}
    >
      {label}
    </InputLabel>
    <Select
      variant="outlined"
      labelId={`${label}-label`}
      id={`${label}-select`}
      label={label}
      value={props.value || ""}
      defaultValue=""
      {...props}
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
          outline: "solid 1px #E0E0E0",
        },
        "& .MuiSelect-select": {
          padding: "24px 14px 8px",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            "&:hover": {
              backgroundColor: "#F5F5F5",
            },
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
