import { useState } from "react";
import "./App.css";
import { MakeNewPerson } from "./MakeNewPerson";
import { Person } from "./models/Person";
import { PeopleList } from "./PeopleList";

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(
    undefined
  );
  const addNewPerson = (newPerson: Person) => {
    setPeople((oldPeople) => [newPerson, ...oldPeople]);
  };

  return (
    <>
      <PeopleList
        people={people}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
      />
      <MakeNewPerson addNewPerson={addNewPerson} />
    </>
  );
}

export default App;
