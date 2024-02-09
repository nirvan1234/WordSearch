/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './src/navigations';
import { Provider } from 'react-redux';
import {store} from './src/context/provider';








const  App = () =>{

  return (
    <Provider store ={store}>
      <AppContainer />
    </Provider>
  );
}



export default App;


