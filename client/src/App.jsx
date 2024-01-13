import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Daily from './components/Daily';
import FiveDay from './components/FiveDay';
import Favorite from './components/Favorite';
import { Route, Routes } from "react-router-dom";

function App() {
return (
    <>
    <Navbar/>
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/daily" element={<Daily/>} />
        </Routes>
    <div class="container">    
    <Daily/>
    <FiveDay/>
    <Favorite/>
    </div>
    <Footer/>
    </>
)    
}

export default App;