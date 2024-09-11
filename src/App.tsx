// import "./App.css";
import { Button } from "./components/Button";
import { TwoColumnsLayout } from "./components/TwoColumnsLayout";
import { MakeNewPerson } from "./people/MakeNewPerson";
import { ItemList } from "./people/ItemList";
import { usePeopleManagement } from "./people/usePeopleManagement";

function App() {
  const { people, selectedPerson, setSelectedPerson, addNewPerson } =
    usePeopleManagement();

  return (
    <>
      <Button onClick={() => alert("I was clicked")}>Click Me</Button>

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
    </>
  );
}

export default App;
