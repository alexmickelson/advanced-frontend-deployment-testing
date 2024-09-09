import { FC, useEffect, useState } from "react";
import { Person } from "./models/Person";

export const PeopleList: FC<{
  people: Person[];
  selectedPerson?: Person;
  setSelectedPerson: (newPerson: Person) => void;
}> = ({ people, selectedPerson, setSelectedPerson }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);

  useEffect(() => {
    setFilteredPeople(
      people.filter((p) =>
        p.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [filterValue, people]);

  return (
    <div>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <br />
      People List
      <hr />
      {filteredPeople.map((person) => (
        <div
          key={person.id}
          onClick={() => setSelectedPerson(person)}
          className={`personItem ${
            selectedPerson?.id === person.id ? "isSelected" : ""
          }`}
        >
          {person.name}
        </div>
      ))}
    </div>
  );
};
