import Day from './Day';
import { useState, useEffect } from 'react';

function FiveDay(props) {
    const myLocation = props.location ;
    console.log(myLocation);

    useEffect(() => {
    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=' + myLocation + '&appid=0282671f74388449f4d4c1e0b2dbe75e&units=imperial')
        .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            const fiveDayTemp=[];
            var i;
            for (i=0; i<5; i++){
                let temp=data.list[i].main.temp;
                fiveDayTemp.push(temp);
            }
            console.log([fiveDayTemp]);
          })
         .catch(error => console.error(error))
    }, []);

    return (
        <section id="five-day-forecast"><br/><br/>
            <h2>5-DAY FORECAST</h2>
            <div className="row justify-content-between">  
                <Day 
                    // date={fiveDay[0].date}  
                    ///temperature={parseInt(fiveDayTemp[0])}  
                    // weather={fiveDay[0].weather} 
                    // icon={fiveDay[0].icon} 
                />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        </section> 
    )
}    

export default FiveDay;