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
  add: async (newItemOptions: { name: string; id: number; file: File }) => {
    const formData = new FormData();
    formData.append("name", newItemOptions.name);
    formData.append("id", newItemOptions.id.toString());
    formData.append("file", newItemOptions.file)
    await axios.post(`${baseUrl}/`, formData);
  },
};
