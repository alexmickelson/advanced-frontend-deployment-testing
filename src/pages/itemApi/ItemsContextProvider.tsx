import { FC, ReactNode, useEffect, useState } from "react";
import { ApiItem, itemsContext } from "./useItemsContext";
import { itemsApiService } from "./itemsApiService";

// http://api.alex-react.duckdns.org/

export const ItemsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<ApiItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    itemsApiService.getAll().then((apiData) => {
      setItems(apiData);
      setIsLoading(false);
    });
  }, []);

  const addItem = async ({
    name,
    id,
    file,
  }: {
    name: string;
    id: number;
    file: File;
  }) => {
    setIsLoading(true);
    await itemsApiService.add(id, name, file);
    const newItems = await itemsApiService.getAll();
    setItems(newItems);
    setIsLoading(false);
  };

  return (
    <itemsContext.Provider
      value={{
        items,
        addItem,
        isLoading,
      }}
    >
      {children}
    </itemsContext.Provider>
  );
};
