import { FC } from "react";
import { TextInputControl } from "./useTextInput";

export const TextInput: FC<{ control: TextInputControl; label: string }> = ({
  control,
  label,
}) => {
  return (
    <label className="w-100">
      {label}
      <input
        className="form-control"
        value={control.value}
        onChange={(e) => control.setValue(e.target.value)}
      />
    </label>
  );
};
