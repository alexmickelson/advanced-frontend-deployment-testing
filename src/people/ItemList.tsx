import { useEffect, useState } from "react";
import styles from "./peopleList.module.scss";

export function ItemList<T>({
  people,
  selectedPerson,
  setSelectedPerson,
  getName,
  getId,
}: {
  people: T[];
  selectedPerson?: T;
  setSelectedPerson: (newPerson: T) => void;
  getName: (item: T | undefined) => string;
  getId: (item: T | undefined) => string;
}) {
  const [filterValue, setFilterValue] = useState("");
  const [filteredPeople, setFilteredPeople] = useState<T[]>([]);

  useEffect(() => {
    setFilteredPeople(
      people.filter((p) =>
        getName(p).toLowerCase().includes(filterValue.toLowerCase())
      )
    );
  }, [filterValue, getName, people]);

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
          key={getId(person)}
          onClick={() => setSelectedPerson(person)}
          className={`${styles.listItemHover} personItem ${
            getId(selectedPerson) === getId(person) ? "isSelected" : ""
          }`}
        >
          {getName(person)}
        </div>
      ))}
    </div>
  );
}
