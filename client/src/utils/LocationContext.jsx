import { createContext } from 'react';   

export const LocationContext = createContext();

const LocationProvider = ({children}) => {
return (
    <LocationContext.Provider value="London">
        {children}
    </LocationContext.Provider>    
)
};

export default LocationProvider;