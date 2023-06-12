import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Status from "./components/Status";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

const App = function () {
  const [items, setItems] = useState([...initialItems]);
  const addItemHandler = function (enteredItem) {
    setItems((preItems) => [...preItems, enteredItem]);
  };

  const deleteItemHandler = function (id) {
    setItems((preItems) => {
      return preItems.filter((item) => item.id !== id);
    });
  };

  const clearListHandler = function () {
    setItems([]);
  };

  const sortItemHandler = function (type) {
    console.log(type);
    switch (type) {
      case "inputOrder":
        setItems((preItems) => preItems.sort((a, b) => a.id - b.id));
        return;
      case "description":
        setItems((preItems) =>
          preItems.sort((a, b) => a.description.localeCompare(b.description))
        );
        return;
      case "packedStatus":
        setItems((preItems) => preItems.sort((a, b) => a.packed - b.packed));
        return;
      default:
        break;
    }
  };
  return (
    <main className="app">
      <Logo />
      <Form onAddItem={addItemHandler} lastIndex={initialItems.at(-1).id} />
      <PackingList
        items={items}
        onDeleteItem={deleteItemHandler}
        onClearList={clearListHandler}
        onSortItem={sortItemHandler}
      />
      <Status />
    </main>
  );
};

export default App;
