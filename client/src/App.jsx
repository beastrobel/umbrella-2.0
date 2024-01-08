import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import Daily from './components/Daily';
import { Route, Routes } from "react-router-dom";

function App() {
return (
    <>
    <Navbar/>
    <div class="container">
        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/daily" element={<Daily/>} />
        </Routes>
    </div>
    </>
)    
}

export default App;