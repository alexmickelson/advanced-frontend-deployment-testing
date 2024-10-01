import { FC, ReactNode, useState } from "react";
import { ApiItem, itemsContext } from "./useItemsContext";

// http://api.alex-react.duckdns.org/

export const ItemsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ApiItem[]>([]);
  return (
    <itemsContext.Provider
      value={{
        items,
        addItem: (newItem) => setItems((oldItems) => [...oldItems, newItem]),
      }}
    >
      {children}
    </itemsContext.Provider>
  );
};
