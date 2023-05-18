import "./ContactItem.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, toggleFavorite } from "../../redux/actions";
import { Link } from 'react-router-dom';

const ContactItem = () => {
  const contacts = useSelector((state) => state.contacts);
  const searchTerm = useSelector((state) => state.searchTerm);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = searchTerm
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : contacts;

  const handleToggleFavorite = (contact) => {
    const updatedContact = { ...contact, favorite: !contact.favorite };
    dispatch(toggleFavorite(updatedContact));
  };
const countFavoriteContacts = filteredContacts.reduce((count, contact) => {
    if (contact.favorite) {
      return count + 1;
    }
    return count;
  }, 0);
  return (
    
    <div className="bg-light rounded-end container p-5">
      <div >
        <span className="favorite_user p-1 rounded">Favorite Contacts: {countFavoriteContacts}</span>
      </div>
      {filteredContacts.map((contact) => (
        <div key={contact.id} className="d-flex justify-content-around align-items-center rounded-pill border-info border-top-0 border py-3 px-5 shadow-lg mb-5">
          {contact.avatar && (
            <img className="img_contact rounded-circle" src={URL.createObjectURL(contact.avatar)} alt="avatar" />
          )}
            <div className="d-flex justify-content-center align-items-center my-2">
              <svg 
                width="30"
                height="30"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleToggleFavorite(contact)} // Додано обробник події onClick
                style={{
                  fill: contact.favorite ? '#FFA800' : '#FFf',
                 
                }}
              >
                <path
                stroke="#000000"
  strokeWidth="1"
  opacity="1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.50001 9.75005L3.60691 11.271C3.26064 11.4531 2.83237 11.32 2.65033 10.9737C2.57783 10.8358 2.55282 10.6779 2.57915 10.5243L3.13169 7.30282L0.791118 5.02133C0.510984 4.74826 0.505252 4.29981 0.778315 4.01967C0.887051 3.90812 1.02953 3.83553 1.18369 3.81313L4.41827 3.34312L5.86482 0.412082C6.03796 0.0612772 6.46269 -0.0827546 6.8135 0.0903779C6.95319 0.15932 7.06626 0.27239 7.1352 0.412082L8.58175 3.34312L11.8163 3.81313C12.2035 3.86938 12.4717 4.22882 12.4155 4.61596C12.3931 4.77012 12.3205 4.91259 12.2089 5.02133L9.86834 7.30282L10.4209 10.5243C10.487 10.9099 10.228 11.2761 9.84247 11.3422C9.68893 11.3685 9.531 11.3435 9.39311 11.271L6.50001 9.75005Z"
                />
              </svg>
            </div>
          <div className="text-right">
            <h3 className="mb-3 ">{contact.name}</h3>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <p>{contact.status}</p>
          
           
            <div className="d-flex justify-content-between px-3">
              <Link to={`/update-contact/${contact.id}`}>
                <button className="btn btn-danger">Edit</button>
              </Link>
              <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactItem;
