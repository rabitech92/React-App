
import './App.css';
import { Home } from './components/Home';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import About from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import Footer from './components/Footer';
import User from './components/User';
import Test from './components/Test';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EditUser from './components/EditUser';
import ViewUser from './components/ViewUser';
import addPatient from './components/patient/addPatient';
import Main from './components/patient/Main';

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
      <Routes> 
        <Route path="/" element={<Main/>}/>       
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
        <Route path="/viewUser/:id" element={<ViewUser/>}/>
        <Route path="/addPatient" element={<addPatient/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
