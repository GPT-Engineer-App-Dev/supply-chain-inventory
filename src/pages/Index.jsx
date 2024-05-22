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
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Inventory Management</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Item name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Buy price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
          <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={newItem.date} onChange={(e) => setNewItem({ ...newItem, date: e.target.value })} />
          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors" onClick={handleAddItem}>
            <FaPlus />
          </button>
        </div>
        <table className="min-w-full bg-white mt-6">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">Item Name</th>
              <th className="py-3 px-4 text-left text-gray-600">Buy Price</th>
              <th className="py-3 px-4 text-left text-gray-600">Quantity</th>
              <th className="py-3 px-4 text-left text-gray-600">Date Received</th>
              <th className="py-3 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                {editIndex === index ? (
                  <>
                    <td className="py-2 px-4">
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} />
                    </td>
                    <td className="py-2 px-4">
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={editItem.price} onChange={(e) => setEditItem({ ...editItem, price: e.target.value })} />
                    </td>
                    <td className="py-2 px-4">
                      <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={editItem.quantity} onChange={(e) => setEditItem({ ...editItem, quantity: e.target.value })} />
                    </td>
                    <td className="py-2 px-4">
                      <input type="date" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={editItem.date} onChange={(e) => setEditItem({ ...editItem, date: e.target.value })} />
                    </td>
                    <td className="py-2 px-4">
                      <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors" onClick={handleSaveEdit}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">{item.date}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <button className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition-colors" onClick={() => handleEditItem(index)}>
                        <FaEdit />
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors" onClick={() => handleDeleteItem(index)}>
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
