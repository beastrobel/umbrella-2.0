import './Footer.css';

function Footer() {
    return(
        <footer>
            <h3 className="text-center">Playful design and powerful code.</h3> <br/>
            <p className="mx-5">Umbrella Weather is a responsive weather app developed using React and powered by OpenWeatherMap APIs. It uses geolocation to display the user's local weather conditions, as well as a five day forecast. Umbrella Weather saves the user's favorite locations and sends gentle reminders to pack an umbrella when it's raining.</p>
            <p>Developed by Beatriz Strobel</p>    
        </footer> 
    );
}

export default Footer;