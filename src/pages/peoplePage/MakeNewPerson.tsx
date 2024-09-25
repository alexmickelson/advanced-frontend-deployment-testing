import { FC, useEffect, useState } from "react";
import { Person } from "../models/Person";
import classes from "./form.module.scss";
import { usePeopleContext } from "../context/people/usePeopleContext";

const useDebounce = (debounceFunction: () => void) => {
  useEffect(() => {
    const timeoutId = setTimeout(debounceFunction, 1000);

    const doBeforeNextTime = () => {
      clearTimeout(timeoutId);
    };
    return doBeforeNextTime;
  }, [debounceFunction]);
};

export const MakeNewPerson: FC<{
  startingValueVariable: "radio option" | "default radio option" | "";
}> = ({ startingValueVariable }) => {
  const { addNewPerson } = usePeopleContext();
  const [name, setName] = useState("");

  const [debounceMessage, setDebounceMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    "radio option" | "default radio option" | ""
  >(startingValueVariable);

  useDebounce(() => setDebounceMessage("something " + name));

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
            className={"form-control is-valid " + classes.formControl}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <div>{debounceMessage}</div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="checkedInput"
            id="nonCheckedInput"
            onChange={(e) => {
              console.log("checking default radio");
              console.log(e.target.value);
              setSelectedOption("radio option");
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
