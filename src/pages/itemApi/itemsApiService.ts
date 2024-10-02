import axios from "axios";
import { ApiItem } from "./useItemsContext";

const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL not set");
else console.log(`VITE_API_URL is ${baseUrl}`);

export const itemsApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}/`);

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

    await axios.post(`${baseUrl}/`, newItem);
  },
};
