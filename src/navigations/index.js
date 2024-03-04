import React,{useState, useEffect} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './authNavigator';
import auth from '@react-native-firebase/auth';

const AppContainer = () => {

  const [intializing, setIntializing] = useState(true);
  const [user, setUser] = useState(null);

    const isLoggedIn = false;

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
    <NavigationContainer>
        {
            isLoggedIn?
            <DrawerNavigator/>:
            <AuthNavigator/>
        }
    
   </NavigationContainer>
  )
}

export default AppContainer;
