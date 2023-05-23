import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT, TOGGLE_FAVORITE,ADD_CATEGORY, DELETE_CATEGORY } from "./type";

export const addContact = (newContact) => {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const editContact = (id, updateContact) => {
  return {
    type: EDIT_CONTACT,
    payload: { id, updateContact },
  };
};

export const searchContact = (searchTerm) => {
  return {
    type: SEARCH_CONTACT,
    payload: searchTerm.toLowerCase(),
  };
};

export const toggleFavorite = (updatedContact) => {
  return {
    type: TOGGLE_FAVORITE,
    payload: updatedContact,
  };
};
export const addCategory = (categoryName) => {
  return {
    type: ADD_CATEGORY,
    payload: categoryName,
  };
};
export const deleteCategory = (category) => {
  return {
    type: DELETE_CATEGORY,
    payload: category,
  };
};