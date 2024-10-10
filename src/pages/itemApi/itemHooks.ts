import { useMutation, useQuery } from "@tanstack/react-query";
import { itemsApiService } from "./itemsApiService";
import { myQueryClient } from "../../services/myQueryClient";

export const itemKeys = {
  itemList: ["all items"] as const,
};

export const useItemsQuery = () => {
  return useQuery({
    queryKey: itemKeys.itemList,
    queryFn: async () => await itemsApiService.getAll(),
  });
};

export const useAddItemMutation = () => {
  return useMutation({
    mutationFn: async (newItemOptions: {
      name: string;
      id: number;
      file: File;
    }) => await itemsApiService.add(newItemOptions),
    onSuccess: () => {
      myQueryClient.invalidateQueries({
        queryKey: itemKeys.itemList,
        refetchType: "all"
      });
    },
  });
};
