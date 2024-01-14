function Icon(props) {
    return(
        <>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} id="weatherIcon"/>
        </>
    )
};

export default Icon;