import './Form.css';
import { useState } from 'react';  

function Form() {
    const [location, setLocation] = useState('');
    const [mylocation, setMyLocation] = useState('London');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputValue = target.value;
        setLocation(inputValue);
        setMyLocation(inputValue);
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
    };


    return(
        <>
        <form id="location-search" onSubmit={handleFormSubmit}>
            <label label="true" htmlFor="search-bar">Search by city or zipcode</label>
            <input
                value={location}
                name="location"
                onChange={handleInputChange}
                type="text"
                id="search-bar"
            />
            <button type="submit" id="search-button" aria-label="search"><span className="material-symbols-outlined" id="search-bar-icon">search</span></button>
        </form>
        </>
    );
}

export default Form;

