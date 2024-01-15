function Day (props) {
    return ( 
            <div className="card col-sm-12 col-md-12 col-lg-2" id="day-1">
                <p className="card-text text-left" id="weekday">date</p>
                <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}/>
                <p className="card-title text-right" id="weekday-temp">{props.temperature}°F</p>
                <p className="card-text text-right">{props.weather}</p>
            </div>
    );            
};

export default Day;