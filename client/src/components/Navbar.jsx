import './Navbar.css';

function Navbar() {
    return(
        <header>
            <nav class="navbar navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="material-symbols-outlined" id="search-icon">search</span>
                </button>
                <p id="brand" class="mx-auto d-block">Umbrella</p>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav">
                            <form id="location-search" action="#location">
                                <label label for="search-bar">Search by city or zipcode</label>
                                <input type="text" name="postal-code" id="search-bar" onfocus="this.value=''" />
                                <button type="submit" id="search-button" aria-label="search"><span class="material-symbols-outlined" id="search-bar-icon">search</span></button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;