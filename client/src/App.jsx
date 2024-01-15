import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Daily from './components/daily/Daily';
import LocationProvider from './utils/LocationContext';


function App() {
return (
    <>
    <Navbar/>
    <LocationProvider>
        <Daily />
    </LocationProvider>
    <div className="container">    
    </div>
    <Footer/>
    </>
);    
}

export default App;