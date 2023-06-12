import { useState } from "react";

const Form = function ({ onAddItem, lastIndex }) {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");

  const clearInput = function () {
    setQuantity(1);
    setItem("");
  };
  const addItemHandler = function (e) {
    e.preventDefault();
    const newItem = {
      id: lastIndex + 1,
      description: item,
      quantity,
      packed: false,
    };
    onAddItem(newItem);
    clearInput();
  };
  return (
    <form className="add-form">
      <h3>What do you need for your trip ?</h3>
      <select
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItemHandler}>Add</button>
    </form>
  );
};

export default Form;
