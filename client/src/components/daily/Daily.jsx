import './Daily.css';
import Location from './Location';
import Icon from './Icon';
import Temp from './Temp';
import Weather from './Weather';

function Daily() {
    return (
        <section id="daily-forecast">
            <div className="hero-image">
                <div className="hero-text">
                    <Location />
                    <Icon />
                    <Temp />
                    <Weather />
                </div>
            </div>    
        </section>
    );
}    

export default Daily;