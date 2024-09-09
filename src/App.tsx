// import "./App.css";
import { MakeNewPerson } from "./MakeNewPerson";
import { PeopleList } from "./PeopleList";
import { usePeopleManagement } from "./usePeopleManagement";

function App() {
  const { people, selectedPerson, setSelectedPerson, addNewPerson } =
    usePeopleManagement();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <PeopleList
              people={people}
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
            />
          </div>
          <div className=" col-lg-2 col-md-3 col-sm-4 col-12 ">
            <MakeNewPerson addNewPerson={addNewPerson} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
