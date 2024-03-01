import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import VideoCall from '../screens/videoCall';
import AuthNavigator from './authNavigator';

const DrawerNavigator = () => {
    const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator initialRouteName='Welcome to Evolve Pune'>
    <drawer.Screen name="Welcome to Evolve Pune" component={HomeNavigator}></drawer.Screen>
    <drawer.Screen name="Account" component={AuthNavigator}></drawer.Screen>
    </drawer.Navigator>
  )
}

export default DrawerNavigator

