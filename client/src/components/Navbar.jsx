import './Navbar.css';

function Navbar() {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <span class="material-symbols-outlined" id="search-icon">search</span>
                <p id="brand" class="mx-auto d-block">Umbrella</p>
            </nav>
        </header>
    );
}

export default Navbar;