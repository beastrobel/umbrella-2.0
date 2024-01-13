import './Form.css';
import ApiFetch from '../../utils/ApiFetch';

export default function Form() { 
    return(
        <>
        <form id="location-search" action="#location">
            <label label for="search-bar">Search by city or zipcode</label>
            <input type="text" name="postal-code" id="search-bar" onFocus="this.value=''" />
            <button type="submit" id="search-button" aria-label="search"><span className="material-symbols-outlined" id="search-bar-icon">search</span></button>
        </form>
        <ApiFetch />
        </>
    );
};
