import { Person } from "./models/Person";

const getPeopleFromApi = async (): Promise<Person[]> => {
  // await
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      name: "Alex",
    },
    {
      id: "2",
      name: "Ben",
    },
  ];
};
