import axios from "axios";
import { ApiItem } from "./useItemsContext";

export const baseUrl = import.meta.env.VITE_API_URL;

if (!baseUrl) console.log("VITE_API_URL not set");
else console.log(`VITE_API_URL is ${baseUrl}`);

export const itemsApiService = {
  getAll: async () => {
    const response = await fetch(`${baseUrl}/`);

    const data: ApiItem[] = await response.json();
    return data;
  },
  add: async (id: number, name: string, file: File) => {
    // await fetch("http://localhost:5226/", {
    //   method: "POST",
    //   body: JSON.stringify(newItem),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });

    const formData = new FormData();
    formData.append("id", id.toString())
    formData.append("name", name)
    formData.append("file", file)

    await axios.post(`${baseUrl}/`, formData);
  },
};
