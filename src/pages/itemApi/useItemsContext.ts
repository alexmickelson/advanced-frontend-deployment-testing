import { createContext, useContext } from "react";

export interface ApiItem {
  name: string;
  id: number;
  imageFileName: string
}

export interface ItemsContextInterface {
  items: ApiItem[];
  addItem: (item: {name: string, id: number, file: File}) => void;
  isLoading: boolean;
}

export const itemsContext = createContext<ItemsContextInterface>({
  items: [],
  addItem: () => {},
  isLoading: false,
});

export const useItemsContext = () => useContext(itemsContext);
