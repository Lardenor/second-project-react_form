import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT,SEARCH_CONTACT } from "./type";
const initialState = {
  contacts: [],
 searchTerm:''
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
        searchTerm:action.payload
      };
    default:
      return state;
  }
};
export default reducer;
