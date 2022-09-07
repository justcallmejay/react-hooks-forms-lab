import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "",
  })

  function createItems(event) {
    const { name, value } = event.target

    setNewItem((previousItems) => ({
      ...previousItems, [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNewItem({
      id: uuid(),
      name: "",
      category: "",
    })
    onItemFormSubmit(newItem)
    console.log(newItem.name, newItem.category, newItem.id)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={createItems}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={createItems}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
