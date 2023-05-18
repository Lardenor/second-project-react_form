import "./ContactItem.css"
import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { Link } from 'react-router-dom';
const ContactItem=()=>{
  const contacts= useSelector((state)=>state.contacts)
  const searchTerm= useSelector((state)=>state.searchTerm)

  const dispatch=useDispatch();
    const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };
const filteredContacts= searchTerm?contacts.filter((contact)=>
contact.name.toLowerCase().includes(searchTerm.toLowerCase())
)
:contacts
    return(
          <div className="bg-light rounded-end container p-5 ">
           {filteredContacts && filteredContacts.map((contact)=>(
            <div key={contact.id} className="d-flex justify-content-between align-items-center rounded-pill border-info border-top-0 border py-3 px-5 shadow-lg mb-5">
                

                 {contact.avatar && (
            <img className="img_contact rounded-circle" src={URL.createObjectURL(contact.avatar)} alt="avatar" />
          )}
                
                <div className="text-right"><h3 className="mb-3 ">{contact.name}</h3>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.status}</p>
                <div className="d-flex justify-content-between px-3">
<Link to={`/update-contact/${contact.id}`}><button className="btn btn-danger ">Edit</button></Link>
                 <button className="btn btn-danger " onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
                </div>
                
                </div>
            </div>
           )

      )}
       </div>
     
     
    )
}
export default ContactItem


