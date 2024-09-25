import { FC, ReactNode } from "react";
import { ItemList } from "../../components/ItemList";
import { usePeopleContext } from "../../context/people/usePeopleContext";

export const PeopleList: FC<{
  DetailComponent: (props: { person: string }) => ReactNode;
}> = ({ DetailComponent }) => {
  const { people, selectedPerson, setSelectedPerson } = usePeopleContext();
  return (
    <>
      <ItemList
        people={people}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        getName={(p) => p?.name ?? ""}
        getId={(p) => p?.id ?? ""}
      />
      {selectedPerson && <DetailComponent person={selectedPerson.name} />}
    </>
  );
};
