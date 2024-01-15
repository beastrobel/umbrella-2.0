import './Form.css';

function Form(props) {
    return(
        <>
        <form id="location-search" onSubmit={props.handleFormSubmit}>
            <label label="true" htmlFor="search-bar">Search by city</label>
            <input
                value={location}
                name="location"
                onChange={props.handleInputChange}
                type="text"
                id="search-bar"
            />
            <button type="submit" id="search-button" aria-label="search"><span className="material-symbols-outlined" id="search-bar-icon">search</span></button>
        </form>
        </>
    );
}

export default Form;

