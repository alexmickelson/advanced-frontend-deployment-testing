import { FC, useState } from "react";
import { Person } from "./models/Person";

export const MakeNewPerson: FC<{
  addNewPerson: (newPerson: Person) => void;
}> = ({ addNewPerson }) => {
  const [name, setName] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const person: Person = {
            name,
            id: Date.now().toString(),
          };
          addNewPerson(person);
          setName("");
        }}
      >
        <label>
          New Person Name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </form>
    </div>
  );
};
