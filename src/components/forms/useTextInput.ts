import { useEffect, useState } from "react";

export interface TextInputControl {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

export const useTextInput = (
  startingValue: string = "",
  getErrorMesage: (value: string) => string
) => {
  const [value, setValue] = useState(startingValue);
  const [error, setError] = useState("");

  useEffect(() => {
    setError(getErrorMesage(value));
  }, [getErrorMesage, value]);


  return {
    value,
    setValue,
    error,
  };
};
