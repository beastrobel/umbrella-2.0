function Location() {
    const myLocation = localStorage.getItem('location');

    return(
        <>
        <p id="yourLocation">{myLocation.toUpperCase()}</p><br/><br/>
        </>
    )
};

export default Location;
