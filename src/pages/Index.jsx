import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState("");

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditItem(items[index]);
  };

  const handleSaveEdit = () => {
    const updatedItems = items.map((item, index) => (index === editIndex ? editItem : item));
    setItems(updatedItems);
    setEditIndex(null);
    setEditItem("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Inventory Management</h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-l-lg" placeholder="Add new item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg" onClick={handleAddItem}>
            <FaPlus />
          </button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
              {editIndex === index ? <input type="text" className="flex-grow p-2 border border-gray-300 rounded-lg" value={editItem} onChange={(e) => setEditItem(e.target.value)} /> : <span>{item}</span>}
              <div className="flex space-x-2">
                {editIndex === index ? (
                  <button className="bg-green-500 text-white p-2 rounded-lg" onClick={handleSaveEdit}>
                    Save
                  </button>
                ) : (
                  <button className="bg-yellow-500 text-white p-2 rounded-lg" onClick={() => handleEditItem(index)}>
                    <FaEdit />
                  </button>
                )}
                <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => handleDeleteItem(index)}>
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
