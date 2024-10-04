import { useState } from "react";
import { TextInput } from "../../components/forms/TextInput";
import { useTextInput } from "../../components/forms/useTextInput";
import { useItemsContext } from "./useItemsContext";

export const AddItemForm = () => {
  const { addItem } = useItemsContext();
  const [file, setFile] = useState<File | undefined>();

  const nameControl = useTextInput("", (value) =>
    value.length < 3 ? "name must be greater than 3 characters" : ""
  );
  return (
    <section className="row w-100 justify-content-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!nameControl.error)
            if (file)
              addItem({
                id: Date.now(),
                name: nameControl.value,
                file,
              });
            else console.log("cannot create item, file is undefined");
          else console.log("cannot add item, name not valid");
        }}
        className="col-6"
      >
        <TextInput label="New Item Name" control={nameControl} />

        <input
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              const inputFile = e.target.files[0];
              console.log(inputFile);
              setFile(inputFile);
            } else {
              console.log("file list on input is null");
            }
          }}
        />
        <button className="btn btn-primary w-100 my-1">Add Item</button>
      </form>
    </section>
  );
};
