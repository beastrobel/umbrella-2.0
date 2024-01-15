import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Daily from './components/daily/Daily';
import FiveDay from './components/fiveday/FiveDay';
import LocationProvider from './utils/LocationContext';


function App() {
return (
    <>
    <Navbar/>
    <LocationProvider>
        <Daily />
        <div className="container">   
            <FiveDay /> 
        </div>
    </LocationProvider>
    <Footer/>
    </>
);    
}

export default App;