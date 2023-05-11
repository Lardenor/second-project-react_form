import "./ContactItem.css"
const ContactItem=({stor})=>{
    return(
          <div className="bg-light rounded-end container">
           {stor.map((contact)=>(
            <div key={contact.id}>
                

                 {contact.avatar && (
            <img className="img_contact rounded-circle" src={URL.createObjectURL(contact.avatar)} alt="avatar" />
          )}
                
                <div><h3>{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <p>{contact.status}</p>
                </div>
            </div>
           )

      )}
       </div>
     
     
    )
}
export default ContactItem
