import './Daily.css';

function Daily() {
    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-location">
                    <p id="yourLocation">NO LOCATION AVAILABLE</p>
                </div>
                <div className="hero-text">
                    <img src="" id="weatherIcon"/>
                    <h1 class="hero-header" id="yourTemp">--°F</h1>
                    <p id="yourWeather">No Data Available</p><br/>
                </div>
            </div>        
        </section>
    );
}    

export default Daily;