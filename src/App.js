
import './App.css';
import { Home } from './components/Home';
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import About from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import Footer from './components/Footer';
import User from './components/User';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
