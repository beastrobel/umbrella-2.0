import './Navbar.css';
import Form from './Form';
import ToggleButton from './ToggleButton';

export default function Navbar() {
    return(
        <header>
            <nav className="navbar navbar-dark">
                <ToggleButton />
                <p id="brand" className="mx-auto d-block">Umbrella</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav">
                            <Form />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};