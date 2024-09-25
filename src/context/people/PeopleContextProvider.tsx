import { FC, ReactNode, useEffect, useState } from "react";
import { peopleContext } from "./usePeopleContext";
import { Person } from "../../models/Person";

export const PeopleContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | undefined>(
    undefined
  );
  const addNewPerson = (newPerson: Person) => {
    setPeople((oldPeople) => [...oldPeople, newPerson]);
  };

  useEffect(() => {
    setPeople([]);
  }, []);

  return (
    <peopleContext.Provider
      value={{
        people,
        selectedPerson,
        setSelectedPerson,
        addNewPerson,
      }}
    >
      {children}
    </peopleContext.Provider>
  );
};
