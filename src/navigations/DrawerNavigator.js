import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import VideoCall from '../screens/videoCall';
import AuthNavigator from './authNavigator';
import About from '../screens/About';

const DrawerNavigator = () => {
    const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator 
    screenOptions={{
         headerStyle:{
          backgroundColor: 'rgba(200, 200, 0, 0.2)',
         }
        }}
    initialRouteName='Welcome to Evolve Pune'>
    <drawer.Screen name="Welcome to Evolve Pune" component={HomeNavigator}></drawer.Screen>
    <drawer.Screen name="About" component={About}></drawer.Screen>
    </drawer.Navigator>
  )
}

export default DrawerNavigator

