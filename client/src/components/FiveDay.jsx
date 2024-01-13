function FiveDay() {
    return (
        <section id="five-day-forecast"><br/><br/>
            <h2>5-DAY FORECAST</h2>
            <div className="row justify-content-between">  
                <div className="card col-sm-12 col-md-12 col-lg-2" id="day-1">
                    <p className="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p className="card-title text-right" id="weekday-temp"></p>
                    <p className="card-text text-right">No Data Available</p>
                </div>
                <div className="card col-sm-12 col-md-12 col-lg-2" id="day-2">
                    <p className="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p className="card-title text-right" id="weekday-temp"></p>
                    <p className="card-text text-right">No Data Available</p>
                </div>
                <div className="card col-sm-12 col-md-12 col-lg-2" id="day-3">
                    <p className="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p className="card-title text-right" id="weekday-temp"></p>
                    <p className="card-text text-right">No Data Available</p>
                </div>
                <div className="card col-sm-12 col-md-12 col-lg-2" id="day-4">
                    <p className="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p className="card-title text-right" id="weekday-temp"></p>
                    <p className="card-text text-right">No Data Available</p>
                </div>
                <div className="card col-sm-12 col-md-12 col-lg-2" id="day-5">
                    <p className="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p className="card-title text-right" id="weekday-temp"></p>
                    <p className="card-text text-right">No Data Available</p>
                </div>
            </div>
        </section>
    )
}    

export default FiveDay;