function FiveDay() {
    return (
        <section id="five-day-forecast"><br/><br/>
        {/* temp form for testing */}
        <form class="form-group" id="location-search">
        <input class="form-control form-control-lg" type="text" placeholder="City" id="searchBar" /><br/>
        <button type="submit" class="btn btn-primary" id="searchButton">search</button>
        </form> 

            <h2>5-DAY FORECAST</h2>
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