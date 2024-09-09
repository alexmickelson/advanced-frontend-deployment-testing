import { FC, useState } from "react";
import { Person } from "./models/Person";
import "./form.css"

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
        <label className="form-label">
          New Person Name
          <input
            style={{
              transition: "all 5s"
            }}
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
