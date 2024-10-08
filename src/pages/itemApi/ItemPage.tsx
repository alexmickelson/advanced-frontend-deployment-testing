import { AddItemForm } from "./AddItemForm";
import { baseUrl } from "./itemsApiService";
import { useItemsContext } from "./useItemsContext";

export const ItemPage = () => {
  const { items } = useItemsContext();
  return (
    <div className="container">
      <h1 className="text-center">Items</h1>

      <div className="row w-100 justify-content-center">
        <div className="col-4">
          {items.map((i) => (
            <div key={i.id}>
              {i.name}
              <img src={baseUrl + "/image/" + i.imageFileName} />
            </div>
          ))}
        </div>
      </div>

      <hr />
      <AddItemForm />
    </div>
  );
};
