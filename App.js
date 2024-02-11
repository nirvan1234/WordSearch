/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import AppContainer from './src/navigations';
import { Provider } from 'react-redux';
import {store} from './src/context/provider';
import SplashScreen from 'react-native-splash-screen';




const  App = () =>{

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Provider store ={store}>
      <AppContainer />
    </Provider>
  );
}



export default App;


