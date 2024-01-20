import './Navbar.css';
import './Form.css';
import ToggleButton from './ToggleButton';

export default function Navbar(props) {
    return(
        <header>
            <nav className="navbar navbar-dark">
                <ToggleButton />                
                <p className="navbar-brand">Umbrella</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav">
                        <form id="location-search" onSubmit={props.handleFormSubmit}>
                            <label label="true" htmlFor="search-bar">Search by city or zipcode</label>
                            <input
                                value={props.value}
                                name="location"
                                onChange={props.handleInputChange}
                                type="text"
                                id="search-bar"
                            />
                            <button type="submit" id="search-button" aria-label="search"><span className="material-symbols-outlined" id="search-bar-icon">search</span></button>
                        </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};