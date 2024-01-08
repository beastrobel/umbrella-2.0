import { Link } from "react-router-dom"
import './Home.css';

const location = "New York";

function Home() {
    return(
        <section>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 id="hero-header">Umbrella Weather</h1>
                    <p>Don't get soaked! Search and find out if you need to bring an umbrella.</p><br/>
                    
                    {/* <form className="form" onSubmit={handleFormSubmit}>
                        <input 
                            value={location}
                            location="location"
                            onChange={handleInputChange}
                            type="text" 
                            placeholder="Location" 
                        /><br/>
                    <button type="submit" class="btn btn-primary" id="searchButton">search</button>
                    </form>  */}

                </div>
            </div>
        </section>
    );
}

export default Home;