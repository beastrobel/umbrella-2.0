import './Daily.css';

function Daily() {
    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-text">
                    <p id="yourLocation">GRAND RAPIDS, MI</p><br/><br/>
                    <img src="https://openweathermap.org/img/wn/13d@2x.png" id="weatherIcon"/>
                    <h1 className="hero-header" id="yourTemp">32°F</h1>
                    <p id="yourWeather">Snow</p><br/>
                </div>
            </div>    
        </section>
    );
}    

export default Daily;