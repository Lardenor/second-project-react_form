import "./ContactList.css"
import Sidebar from "../../Componets/Sidebar/Sidebar"
import ContactItem from "../../Componets/ContactItem/ContactItem"
const ContactList =({stor})=>{
    return(
 <div className="row mt-2 ">
  <div className="col-md-4 " >  <Sidebar/>
  </div>
  <div className="col-md-8"><ContactItem stor={stor}/></div>
</div>
    )
}
export default ContactList