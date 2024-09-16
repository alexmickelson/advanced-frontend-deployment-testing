import { FC, useState } from "react";
import { Person } from "../models/Person";
import "./form.css";

export const MakeNewPerson: FC<{
  addNewPerson: (newPerson: Person) => void;
}> = ({ addNewPerson }) => {
  const [name, setName] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    "radio option" | "default radio option"
  >("default radio option");

  return (
    <div>
      <form
      className="bg-alexcolor-subtle"
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
              transition: "all 5s",
            }}
            name={"Name of Person"}
            className="form-control is-valid"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="nonCheckedInput"
            id="nonCheckedInput"
            onChange={(e) => {
              console.log("checking default radio");
              console.log(e.target.value);
              // setSelectedOption("radio option")
            }}
            checked={selectedOption === "radio option"}
          />
          <label className="form-check-label" htmlFor="nonCheckedInput">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="checkedInput"
            id="checkedInput"
            onChange={() => setSelectedOption("default radio option")}
            checked={selectedOption === "default radio option"}
          />
          <label className="form-check-label" htmlFor="checkedInput">
            Default checked radio
          </label>
        </div>
        <button className="btn btn-alexcolor">Submit</button>
      </form>
    </div>
  );
};
