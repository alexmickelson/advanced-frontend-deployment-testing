import { TextInput } from "../../components/forms/TextInput";
import { useTextInput } from "../../components/forms/useTextInput";
import { useItemsContext } from "./useItemsContext";

export const AddItemForm = () => {
  const { addItem } = useItemsContext();

  const nameControl = useTextInput("", (value) =>
    value.length < 3 ? "name must be greater than 3 characters" : ""
  );
  return (
    <section className="row w-100 justify-content-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!nameControl.error)
            addItem({
              id: Date.now(),
              name: nameControl.value,
            });
          else console.log("cannot add item, name not valid");
        }}
        className="col-6"
      >
        <TextInput label="New Item Name" control={nameControl} />
        <button className="btn btn-primary w-100 my-1">Add Item</button>
      </form>
    </section>
  );
};
