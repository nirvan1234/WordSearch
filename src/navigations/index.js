import React,{useState, useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './authNavigator';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../utils/authContext';

const AppContainer = () => {

  const [intializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const value ={
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
}

console.log(isLoggedIn);
// const MyTheme = {
//   colors: {
//      background:'rgba(200, 200, 0, 0.2)',
//     },
//   }; 
  
function onAuthStateChange(user){
     setUser(user)
     if(intializing) setIntializing(false)
  }
 useEffect(()=>{
  const subscriber = auth().onAuthStateChanged(onAuthStateChange);
  return subscriber;

 },[])

 if(intializing) return null;

  return (
    <AuthContext.Provider value={{
      authUser,
      setAuthUser,
      isLoggedIn,
      setIsLoggedIn
  }}>
    <NavigationContainer>
        {
            isLoggedIn?
            <DrawerNavigator/>:
            <AuthNavigator/>
        }
    
   </NavigationContainer>
   </AuthContext.Provider>
  )
}

export default AppContainer;


