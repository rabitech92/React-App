

import { Home } from './components/Home';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import About from './components/About';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import User from './components/User';
import Test from './components/Test';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import Sidebar from './components/Sidebar';
import RoomMnagment from './components/RoomMnagment';
import Login from './components/Login';




function App() {
  return (
    
    <BrowserRouter>
    <Sidebar>
       <Routes> 
        <Route path="/" element={<Home/>}/>   
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/editUser/:id" element={<EditUser/>}/>
          <Route path="/viewUser/:id" element={<ViewUser/>}/> 
          <Route path="/roomManagment" element={<RoomMnagment/>}/> 
          <Route path="/login" element={<Login/>}/> 
        </Routes>
        </Sidebar>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
