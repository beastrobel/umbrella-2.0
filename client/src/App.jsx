import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Daily from './components/daily/Daily';
import FiveDay from './components/fiveday/FiveDay';
import { useState, useEffect } from 'react';
 
function App() {
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState('');

    const initialDaily = {
        location: 'London',
        temperature: 32,
        weather: 'Rain',
        icon: '13d'
    }

    const [daily, setDaily] = useState([initialDaily]);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setSearch(inputValue);
        setLocation(inputValue);
    }    

    const handleFormSubmit = (e) => {
    e.preventDefault();
        if (search == null) {
            setErrorMessage('Location is invalid');
            return;
        }
        console.log(`Your location: ${location}`);
        console.log(location);
        setSearch('');
        
 
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ location +'&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let dailyWeather = {
            location: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            icon: data.weather[0].icon
        }
        setDaily([dailyWeather]);
        setLocation('');
      })
     .catch(error => console.error(error))
    }
    console.log(daily);

    return (
        <>
        <Navbar
            value={location}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
        />
        <Daily 
            location={daily[0].location.toUpperCase()}
            icon={daily[0].icon}
            temperature={parseInt(daily[0].temperature)}
            weather={daily[0].weather}
        />
            {/* <div className="container">   
                <FiveDay />  
            </div> */}
        <Footer/>
        </>
    );    
}

export default App;