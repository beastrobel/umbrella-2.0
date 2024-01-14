import './Form.css';
import { useState } from 'react';

function Form() {
    const [location, setLocation] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setLocation(inputValue);
    }    

    const handleFormSubmit = (e) => {
    e.preventDefault();
        if (location == null) {
            setErrorMessage('Location is invalid');
            return;
        }
        console.log(`Your location: ${location}`);
        localStorage.setItem('location', location);
        setLocation('');
        fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
          })
    };

    return(
        <>
        <form id="location-search" onSubmit={handleFormSubmit}>
            <label label for="search-bar">Search by city or zipcode</label>
            <input
                value={location}
                name="location"
                onChange={handleInputChange}
                type="text"
                placeholder="location"
                id="search-bar"
            />
            <button type="submit" id="search-button" aria-label="search"><span className="material-symbols-outlined" id="search-bar-icon">search</span></button>
        </form>
        </>
    );
}

export default Form;