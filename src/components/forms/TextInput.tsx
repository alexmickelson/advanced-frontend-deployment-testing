import { FC } from "react";
import { TextInputControl } from "./useTextInput";

export const TextInput: FC<{ control: TextInputControl }> = ({ control }) => {

  return (
    <label>
      <input
        value={control.value}
        onChange={(e) => control.setValue(e.target.value)}
      />
    </label>
  );
};
