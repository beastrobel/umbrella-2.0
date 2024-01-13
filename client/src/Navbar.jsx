import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/"><img src="/umbrellafavicon.png" id="nav-icon"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <CustomLink to="/daily">Daily Weather</CustomLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true }) 
        return (
            <li className={isActive ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to={to} {...props}>
                {children}
            </Link>
            </li>
        )
}

export default Navbar;