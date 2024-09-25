import { TextInput } from "../../components/forms/TextInput";
import { useTextInput } from "../../components/forms/useTextInput";
import { MyModal } from "../../components/myModal/MyModal";
import { useMyModal } from "../../components/myModal/useMyModal";
import { TwoColumnsLayout } from "../../components/TwoColumnsLayout";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { PeopleList } from "./PeopleList";
import { MakeNewPerson } from "./MakeNewPerson";

export const PeoplePage = () => {

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
        <Button onClick={() => modalControl.toggleModal()}>Click Me</Button>
        <TwoColumnsLayout
          leftSide={<PeopleList />}
          rightSide={
            <ErrorBoundary fallbackRender={() => <div>something broke</div>}>
              <MakeNewPerson startingValueVariable={"default radio option"} />
            </ErrorBoundary>
          }
        />
        <MyModal control={modalControl} />j
        <div>
          <img src={`/images/image-${1}.jpg`}></img>
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
