import React,{useState, useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './authNavigator';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../utils/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AppContainer = () => {

  const [intializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value ={
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn
}

console.log(isLoggedIn);

useEffect(() =>{
  getData();
},[])


const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('loginKey');
    
    if (value !== null) {
      // value previously stored
      console.log("storekey",{loginKey: value});

      var isTrueSet = (value === 'true');
      console.log("storekeyBool",isTrueSet);
      setIsLoggedIn(isTrueSet);
    }
  } catch (e) {
     console.log(e);
  }
};
  
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


