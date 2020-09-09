import React , {createContext, useContext, useReducer} from 'react';


// prepare the data layer 
export const StateContext = createContext();


// usage of data makinjg sure of initialization , .... well provide the layer to all my app
export const StateProvider = ({reducer, initialState, children}) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>);
}


// allow us to pull ther information 
export const useStateValue = () => useContext(StateContext);