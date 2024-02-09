import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './authNavigator';

const AppContainer = () => {
    const isLoggedIn = true;
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
