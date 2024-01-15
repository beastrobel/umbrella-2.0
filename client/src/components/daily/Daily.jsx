import './Daily.css';

function Daily(props) {

    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-text">
                    <p id="yourLocation">{props.location}</p><br/><br/>
                    <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} id="weatherIcon"/>
                    <h1 className="hero-header" id="yourTemp">{props.temperature}°F</h1>
                    <p id="yourWeather">{props.weather}</p><br/>
                </div>
            </div>    
        </section>
    );
 }    

export default Daily;