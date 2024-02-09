import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contents from '../screens/Contents';
import Description from '../screens/Description';
import Playlists from '../screens/playlists';

const HomeNavigator = () => {
    const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
    <stack.Screen name="playlists" component={Playlists}></stack.Screen>
    <stack.Screen name="description" component={Description}></stack.Screen>
    <stack.Screen name="contents" component={Contents}></stack.Screen>
    </stack.Navigator>
  )
}

export default HomeNavigator
