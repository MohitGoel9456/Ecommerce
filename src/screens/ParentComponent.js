import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import books from '../data/db.json'

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [data,setData] = useState(undefined);
    const [auth,setAuth] = useState();
    const [cart, setCart] = useState([]);

    const isUserLoggedIn = async () => {
        try {
          const authVal = await AsyncStorage.getItem('isLoggedIn')
          setAuth(authVal);
        } catch (err) {
          setAuth(false);
        }
        return false
      }
    

    useEffect(()=>{
        isUserLoggedIn();
        setData(books);
    },[]);

    return(
        <UserContext.Provider
         value={{
             data,
             setData,
             auth,
             setAuth,
             cart,
             setCart
         }}
        >
            {children}
        </UserContext.Provider>
    )
}