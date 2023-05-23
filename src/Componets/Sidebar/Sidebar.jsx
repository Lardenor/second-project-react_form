import "./Sidebar.css"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, deleteCategory } from '../../redux/actions';

const Sidebar = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const contacts = useSelector((state) => state.contacts);

  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    dispatch(addCategory(newCategory));
    setNewCategory('');
    setShowAddCategory(false);
  };

  const handleDeleteCategory = (category) => {
    dispatch(deleteCategory(category));
  };

  const getCategoryCount = (category) => {
    return contacts.filter((contact) => contact.status === category).length;
  };

  return (
    <div className="bg-light rounded-start p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="fw-bold mb-4">All contacts</div>
        <div className="align-self-start">{contacts.length}</div>
      </div>

      {/* Відображення існуючих категорій */}
      {categories.map((category, index) => (
        <div className={`mb-3 d-flex justify-content-between border-bottom pb-2  text-black px-3 py-2 rounded`}>
             <div
          key={index}
          className={`contacts_div bg_color_cont_${index + 1} text-white  rounded`}
        >
          <div className="category-title ">{category}</div>
        </div>

          <div className={`contacts_div bg_color_cont_${index + 1} text-white  rounded`}>{getCategoryCount(category)}</div>
          <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCategory(category)}>
            Delete
          </button>
        </div>
     
      ))}

      {/* Додавання нової категорії */}
      {showAddCategory ? (
        <div className="mb-3">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAddCategory}>
            Add
          </button>
          <button className="btn btn-secondary" onClick={() => setShowAddCategory(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="btn btn-primary mt-3" onClick={() => setShowAddCategory(true)}>
          Add Category
        </button>
      )}
    </div>
  );
};

export default Sidebar;
