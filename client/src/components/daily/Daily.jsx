import './Daily.css';
import Location from './Location';
import Icon from './Icon';
import Temp from './Temp';
import Weather from './Weather';
import {useState, useEffect, useContext} from 'react';
import { LocationContext } from '../../utils/LocationContext'; 

function Daily() {
    const myLocation = useContext(LocationContext);
    console.log(myLocation);

    const initialDaily = {
        location: myLocation,
        temperature: 32,
        weather: 'Rain',
        icon: '13d'
    }

    const [daily, setDaily] = useState([initialDaily]);

    useEffect(() => {
    fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + initialDaily.location + '&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            let daily = {
                location: data.name,
                temperature: data.main.temp,
                weather: data.weather[0].description,
                icon: data.weather[0].icon
            }
            setDaily([daily]);
          })
         .catch(error => console.error(error))
    }, []);
  
    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-text">
                    <Location location={daily[0].location.toUpperCase()}/>
                    <Icon icon={daily[0].icon} />
                    <Temp temperature={parseInt(daily[0].temperature)} />
                    <Weather weather={daily[0].weather} />
                </div>
            </div>    
        </section>
    );
 }    

export default Daily;