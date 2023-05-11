import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// css

import './App.css';
import ContactList from "./Pages/ContactList/ContactList"
import NewContact from "./Pages/NewContact/NewContact"
import UpdateContact from "./Pages/UpdateContact/UpdateContact"
import NotFound from "./Pages/NotFound/NotFound"
import Header from "./Componets/Header/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='container .bg-info-subtle .bg-secondary'>
  <Router>
   <Header/>
    <Routes>
      <Route path="/" element={<ContactList/>}/>
      <Route path="/new-contact" element={<NewContact/>}/>
      <Route path="/update-contact" element={<UpdateContact/>}/>
      <Route path="*" element={<NotFound/>}/>


    </Routes>

  </Router>
    </div>
  );
}

export default App;
