import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// css

import './App.css';
import ContactList from "./Pages/ContactList/ContactList"
import NewContact from "./Pages/NewContact/NewContact"
import UpdateContact from "./Pages/UpdateContact/UpdateContact"
import NotFound from "./Pages/NotFound/NotFound"
import Header from "./Componets/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const[stor,setStor]=useState([]);
  const handleNewContact =(newContact)=>{
setStor(prevStar=>[...prevStar,newContact])
console.log(stor);
  }
  return (
    <div className='container .bg-info-subtle .bg-secondary'>
  <Router>
   <Header/>
    <Routes>
      <Route path="/" element={<ContactList stor={stor}/>}/>
      <Route path="/new-contact" element={<NewContact onNewContact={handleNewContact}/>}/>
      <Route path="/update-contact" element={<UpdateContact/>}/>
      <Route path="*" element={<NotFound/>}/>


    </Routes>

  </Router>
    </div>
  );
}

export default App;
