import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT, TOGGLE_FAVORITE } from "./type";

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
