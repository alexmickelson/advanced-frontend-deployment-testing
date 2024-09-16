// import "./App.css";
import { Button } from "./components/Button";
import { TwoColumnsLayout } from "./components/TwoColumnsLayout";
import { MakeNewPerson } from "./people/MakeNewPerson";
import { ItemList } from "./people/ItemList";
import { usePeopleManagement } from "./people/usePeopleManagement";
import { MyModal } from "./components/myModal/MyModal";
import { useMyModal } from "./components/myModal/useMyModal";

function App() {
  const { people, selectedPerson, setSelectedPerson, addNewPerson } =
    usePeopleManagement();

  const modalControl = useMyModal();

  return (
    <>
      <div className=" vh-100">
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
      </div>
    </>
  );
}

export default App;
