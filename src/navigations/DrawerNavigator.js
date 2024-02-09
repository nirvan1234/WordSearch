import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import VideoCall from '../screens/videoCall';

const DrawerNavigator = () => {
    const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator initialRouteName='homeNavigator'>
    <drawer.Screen name="HomeNavigator" component={HomeNavigator}></drawer.Screen>
    <drawer.Screen name="VideoCall" component={VideoCall}></drawer.Screen>
    </drawer.Navigator>
  )
}

export default DrawerNavigator

