import './Daily.css';
import Location from './Location';
import Icon from './Icon';
import Temp from './Temp';
import Weather from './Weather';

const daily = {
    location: 'New York',
    temperature: 32,
    weather: 'snow',
    icon: '13d'
}

function Daily() {

    // fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
    //     .then(function (response) {
    //         return response.json();
    //       })
    //       .then(function (data) {
    //         console.log(data);
    //       })

    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-text">
                    <Location location={daily.location}/>
                    <Icon icon={daily.icon} />
                    <Temp temperature={daily.temperature} />
                    <Weather weather={daily.weather} />
                </div>
            </div>    
        </section>
    );
}    

export default Daily;