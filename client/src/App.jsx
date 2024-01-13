import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Daily from './components/Daily';
import FiveDay from './components/FiveDay';
import Favorite from './components/Favorite';
import ApiFetch from './ApiFetch';


function App() {
return (
    <>
    <ApiFetch/>
    <Navbar/>
    <Daily/>
    <div class="container">    
    <FiveDay/>
    <Favorite/>
    </div>
    <Footer/>
    </>
);    
}

export default App;