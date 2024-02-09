import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/login';
import Register from '../screens/register';

const AuthNavigator = () => {
    const authstack = createNativeStackNavigator();
  return (
    <authstack.Navigator>
    <authstack.Screen name="login" component={Login}></authstack.Screen>
    <authstack.Screen name="register" component={Register}></authstack.Screen>
    </authstack.Navigator>
  )
}

export default AuthNavigator
