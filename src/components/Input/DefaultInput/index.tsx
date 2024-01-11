import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DefaultInputProps } from "./types";
import { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { InputTheme } from "./StyledGlobal/styles";
export function DefaultInput({
  label,
  width,
  error,
  removeError,
  isMultiline,
  shrink,
  rows,
  small,
  adornment,
  type,
  toggleShowPassword,
  showPassword,
  value,
  ...rest
}: DefaultInputProps) {
  const useWidth = width;

  // const inputProps = {
  //   ...rest,
  // };

  const inputPropsArray = Object.entries(rest);

  const isPassword = showPassword ? "text" : "password";
  const [showError, setShowError] = useState(error ? true : false);

  useEffect(() => {
    setShowError(error ? true : false);
  }, [error]);

  const handleInputChange = () => {
    if (error && removeError) {
      removeError(error);
    }
    setShowError(false);
  };

  const InputIcon = () => {
    return showPassword ? <Visibility /> : <VisibilityOff />;
  };

  const renderEndAdornment = () => {
    if (type === "password") {
      return (
        <InputAdornment position="end">
          {type !== "password" ? (
            adornment
          ) : (
            <IconButton
              aria-label="toggle password visibility"
              onClick={toggleShowPassword}
              edge="end"
            >
              <InputIcon />
            </IconButton>
          )}
        </InputAdornment>
      );
    }
    if (showError) {
      return (
        <InputAdornment position="end">
          <ClearIcon color="error" />
        </InputAdornment>
      );
    }
  };

  return (
    <>
      <TextField
        type={type === "password" ? isPassword : type}
        label={label}
        variant="filled"
        rows={rows}
        value={value}
        sx={{
          ...InputTheme(),
          width: useWidth,
          height: "100%",
        }}
        onChange={handleInputChange}
        error={error ? true : false}
        inputProps={Object.fromEntries(inputPropsArray)}
        InputProps={{
          endAdornment: renderEndAdornment(),
        }}
        multiline={isMultiline}
        InputLabelProps={{ shrink }}
        size={small ? "small" : "medium"}
      />
    </>
  );
}
