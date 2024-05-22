import React, { useState } from "react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "", quantity: "", date: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [editItem, setEditItem] = useState("");

  const handleAddItem = () => {
    if (newItem.name.trim() !== "" && newItem.price.trim() !== "" && newItem.quantity.trim() !== "" && newItem.date.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem({ name: "", price: "", quantity: "", date: "" });
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditItem({ ...items[index] });
  };

  const handleSaveEdit = () => {
    const updatedItems = items.map((item, index) => (index === editIndex ? { ...editItem } : item));
    setItems(updatedItems);
    setEditIndex(null);
    setEditItem("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Inventory Management</h1>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap mb-4">
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-t-lg" placeholder="Item name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-t-lg" placeholder="Buy price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
          <input type="text" className="flex-grow p-2 border border-gray-300 rounded-t-lg" placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
          <input type="date" className="flex-grow p-2 border border-gray-300 rounded-t-lg" value={newItem.date} onChange={(e) => setNewItem({ ...newItem, date: e.target.value })} />
          <button className="bg-blue-500 text-white p-2 rounded-b-lg" onClick={handleAddItem}>
            <FaPlus />
          </button>
        </div>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Item Name</th>
              <th className="py-2">Buy Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Date Received</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b">
                {editIndex === index ? (
                  <>
                    <td>
                      <input type="text" className="p-2 border border-gray-300 rounded-lg" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} />
                    </td>
                    <td>
                      <input type="text" className="p-2 border border-gray-300 rounded-lg" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: e.target.value })} />
                    </td>
                    <td>
                      <input type="text" className="p-2 border border-gray-300 rounded-lg" value={editItem.quantity} onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })} />
                    </td>
                    <td>
                      <input type="date" className="p-2 border border-gray-300 rounded-lg" value={editItem.date} onChange={(e) => setEditItem({ ...editItem, date: e.target.value })} />
                    </td>
                    <td>
                      <button className="bg-green-500 text-white p-2 rounded-lg" onClick={handleSaveEdit}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2">{item.name}</td>
                    <td className="py-2">{item.price}</td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2">{item.date}</td>
                    <td className="py-2 flex space-x-2">
                      <button className="bg-yellow-500 text-white p-2 rounded-lg" onClick={() => handleEditItem(index)}>
                        <FaEdit />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-lg" onClick={() => handleDeleteItem(index)}>
                        <FaTrash />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
