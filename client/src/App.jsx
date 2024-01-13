import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Daily from './components/Daily';
import FiveDay from './components/FiveDay';
import Favorite from './components/Favorite';

function App() {
return (
    <>
    <Navbar/>
    <Daily/>

    <div class="container">    
    <FiveDay/>
    <Favorite/>
    </div>
    <Footer/>
    </>
)    
}

export default App;