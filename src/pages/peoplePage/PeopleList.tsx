import { ItemList } from "../../components/ItemList";
import { usePeopleContext } from "../../context/people/usePeopleContext";

export const PeopleList = () => {
  const { people, selectedPerson, setSelectedPerson } = usePeopleContext();
  return (
    <ItemList
      people={people}
      selectedPerson={selectedPerson}
      setSelectedPerson={setSelectedPerson}
      getName={(p) => p?.name ?? ""}
      getId={(p) => p?.id ?? ""}
    />
  );
};
