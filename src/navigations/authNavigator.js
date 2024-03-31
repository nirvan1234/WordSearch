import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from '../screens/Landing';
import Register from '../screens/register';
import SignIn from '../screens/signin';

const AuthNavigator = () => {
    const authstack = createNativeStackNavigator();
  return (
    <authstack.Navigator 
    screenOptions={{headerShown: false}}>
    <authstack.Screen name="landing" component={Landing}></authstack.Screen>
    <authstack.Screen name="register" component={Register}></authstack.Screen>
    <authstack.Screen name="signin" component={SignIn}></authstack.Screen>
    </authstack.Navigator>
  )
}

export default AuthNavigator
