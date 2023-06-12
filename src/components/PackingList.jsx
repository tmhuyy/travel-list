import { useState } from "react";
import PackingItems from "./PackingItems";

const PackingList = function ({
  items,
  onDeleteItem,
  onClearList,
  onSortItem,
}) {
  const [sortType, setSortType] = useState("inputOrder");
  const changeSortTypeHandler = function (e) {
    setSortType(e.target.value);
    onSortItem(e.target.value);
  };
  return (
    <div className="list">
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <PackingItems
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
            />
          ))}
        </ul>
      ) : (
        <p>There's no item at all</p>
      )}
      <div>
        <select
          name="sort"
          id="sort"
          onChange={changeSortTypeHandler}
          value={sortType}
        >
          <option value="inputOrder">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESSCRIPTION</option>
          <option value="packedStatus">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={onClearList}>CLEAR LIST</button>
      </div>
    </div>
  );
};

export default PackingList;
