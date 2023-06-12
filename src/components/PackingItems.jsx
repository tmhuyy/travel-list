const PackingItems = function ({ item, onDeleteItem }) {
  const deleteHandler = function () {
    onDeleteItem(item.id);
  };
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={deleteHandler}>❌</button>
    </li>
  );
};

export default PackingItems;
