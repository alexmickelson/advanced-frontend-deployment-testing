import { createContext, useContext } from "react";

export interface ApiItem {
  name: string;
  id: number;
}

export interface ItemsContextInterface {
  items: ApiItem[];
  addItem: (item: ApiItem) => void;
}

export const itemsContext = createContext<ItemsContextInterface>({
  items: [],
  addItem: () => {},
});

export const useItemsContext = () => useContext(itemsContext);
