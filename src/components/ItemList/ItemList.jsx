import Item from "../Item/Item";

function ItemList({ producto }) {
  console.log(producto);
  return (
    <div className="w-25 px-1">
      <Item productos={producto} />
    </div>
  );
}

export default ItemList;