function FiveDay() {
    return (
        <section id="five-day-forecast">
            <h4>5-DAY FORECAST</h4>
            <div class="row justify-content-between">  
                <div class="card col-sm-12 col-md-12 col-lg-2" id="day-1">
                    <p class="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p class="card-title text-right" id="weekday-temp"></p>
                    <p class="card-text text-right">No Data Available</p>
                </div>
                <div class="card col-sm-12 col-md-12 col-lg-2" id="day-2">
                    <p class="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p class="card-title text-right" id="weekday-temp"></p>
                    <p class="card-text text-right">No Data Available</p>
                </div>
                <div class="card col-sm-12 col-md-12 col-lg-2" id="day-3">
                    <p class="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p class="card-title text-right" id="weekday-temp"></p>
                    <p class="card-text text-right">No Data Available</p>
                </div>
                <div class="card col-sm-12 col-md-12 col-lg-2" id="day-4">
                    <p class="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p class="card-title text-right" id="weekday-temp"></p>
                    <p class="card-text text-right">No Data Available</p>
                </div>
                <div class="card col-sm-12 col-md-12 col-lg-2" id="day-5">
                    <p class="card-text text-left" id="weekday"></p>
                    <img src=""/>
                    <p class="card-title text-right" id="weekday-temp"></p>
                    <p class="card-text text-right">No Data Available</p>
                </div>
            </div>
        </section>
    )
}    

export default FiveDay;