import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT, TOGGLE_FAVORITE } from "./type";

const initialState = {
  contacts: [],
  searchTerm: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return {
              ...contact,
              ...action.payload.updateContact,
            };
          }
          return contact;
        }),
      };
    case SEARCH_CONTACT:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case TOGGLE_FAVORITE:
      const { id } = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
        ),
      };
    default:
      return state;
  }
};

export default reducer;
