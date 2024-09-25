import { createContext, useContext } from "react";
import { Person } from "../../models/Person";

export interface PeopleContextInterface {
  people: Person[];
  selectedPerson: Person | undefined;
  setSelectedPerson: React.Dispatch<React.SetStateAction<Person | undefined>>;
  addNewPerson: (newPerson: Person) => void;
}

export const peopleContext = createContext<PeopleContextInterface>({
  people: [],
  selectedPerson: undefined,
  setSelectedPerson: () => {},
  addNewPerson: () => {},
});


export const usePeopleContext = () => {
  return useContext(peopleContext)
}