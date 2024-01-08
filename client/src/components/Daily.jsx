import { Link } from "react-router-dom"

function Daily() {
    return (
        <section id="daily-forecast">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-12">
                <h4>DAILY FORECAST</h4>    
                    <div className="card">
                        <div className="row">
                        <div className="card-body col-sm-12 col-lg-6">
                            <h5 className="card-title text-left" id="yourLocation">Your Location</h5>
                            <p className="card-text text-left" id="yourDate"></p>
                        </div>
                            <div className="card-body col-sm-12 col-lg-6 text-right">
                            <img src="" id="weatherIcon"/>
                            <p className="card-title text-right" id="yourTemp"></p>
                            <p className="card-text text-right" id="yourWeather">No Data Available</p>
                        </div>
                        </div>
                        <p className="card-text text-left" id="umbrella"></p>
                    </div>
                </div>
            </div>
        </section>
    )
}    

export default Daily;