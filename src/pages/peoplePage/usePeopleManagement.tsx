import { useState } from "react";
import { Person } from "../../models/Person";

export const usePeopleManagement = () => {
  const [people, setPeople] = useState<Person[]>([]);

  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(
    undefined
  );

  const addNewPerson = (newPerson: Person) => {
    setPeople((oldPeople) => [newPerson, ...oldPeople]);
  };

  return {
    people,
    selectedPerson,
    setSelectedPerson,
    addNewPerson,
  };
};
