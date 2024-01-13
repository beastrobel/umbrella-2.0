import './Form.css';
import { useState } from 'react';

function Form() {
    const [location, setLocation] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
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
        setLocation('');
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