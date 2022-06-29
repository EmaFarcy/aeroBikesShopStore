import { useState } from "react";
import { useEffect } from "react";
import Item from "../Item/Item";

function ItemList({ product }) {
  console.log(product);
  return (
    <div className="w-25 px-1">
      <Item products={product} />
    </div>
  );
}

export default ItemList;