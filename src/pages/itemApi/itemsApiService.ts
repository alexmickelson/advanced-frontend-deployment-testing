import axios from "axios";
import { ApiItem } from "./useItemsContext";

export const itemsApiService = {
  getAll: async () => {
    const response = await fetch("http://localhost:5226/");

    const data: ApiItem[] = await response.json();
    return data;
  },
  add: async (newItem: ApiItem) => {
    // await fetch("http://localhost:5226/", {
    //   method: "POST",
    //   body: JSON.stringify(newItem),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    await axios.post("http://localhost:5226/", newItem);
  },
};
