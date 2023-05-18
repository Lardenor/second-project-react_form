import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// css

import './App.css';
import ContactList from "./Pages/ContactList/ContactList"
import NewContact from "./Pages/NewContact/NewContact"
import UpdateContact from "./Pages/UpdateContact/UpdateContact"
import NotFound from "./Pages/NotFound/NotFound"
import Header from "./Componets/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
function App() {
//   const[stor,setStor]=useState([]);
//   const handleNewContact =(newContact)=>{
// setStor(prevStar=>[...prevStar,newContact])
// console.log(stor);

//   }
//     const handleDeleteContact = (id) => {
//     setStor((prevStar) => prevStar.filter((contact) => contact.id !== id));
//   };

  return (
    <div className='container .bg-info-subtle .bg-secondary'>
      <Provider store={store}>
 <Router>
   <Header/>
    <Routes>
       <Route path="/" element={<ContactList/>} />
  
      <Route path="/new-contact" element={<NewContact/>}/>
      <Route path="/update-contact/:id" element={<UpdateContact/>}/>
    
      <Route path="*" element={<NotFound/>}/>


    </Routes>

  </Router>
      </Provider>
 
    </div>
  );
}

export default App;

