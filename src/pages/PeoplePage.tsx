import React from "react";
import { MakeNewPerson } from "../people/MakeNewPerson";
import { TextInput } from "../components/forms/TextInput";
import { useTextInput } from "../components/forms/useTextInput";
import { MyModal } from "../components/myModal/MyModal";
import { useMyModal } from "../components/myModal/useMyModal";
import { TwoColumnsLayout } from "../components/TwoColumnsLayout";
import { ItemList } from "../people/ItemList";
import { usePeopleManagement } from "../people/usePeopleManagement";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export const PeoplePage = () => {
  const { people, selectedPerson, setSelectedPerson, addNewPerson } =
    usePeopleManagement();

  const modalControl = useMyModal();
  const notesControl = useTextInput("start note value", () => "");

  return (
    <>
      <div className=" vh-100">

        <Link to="/otherpage">got to other page</Link>

        <button
          onClick={() =>
            notesControl.setValue("note was updated because button was clicked")
          }
        >
          set notes
        </button>
        {/* <i className="bi bi-archive"></i> */}
        <Button onClick={() => modalControl.toggleModal()}>Click Me</Button>

        <TwoColumnsLayout
          leftSide={
            <ItemList
              people={people}
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
              getName={(p) => p?.name ?? ""}
              getId={(p) => p?.id ?? ""}
            />
          }
          rightSide={<MakeNewPerson addNewPerson={addNewPerson} />}
        />
        <MyModal control={modalControl} />
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // const notesAreValid = !notesControl.error;
              // const newDocument = {
              //   notes: notesControl.value ? notesControl.value : undefined,
              // };
            }}
          >
            <TextInput control={notesControl} />
          </form>
        </div>
      </div>
    </>
  );
};
