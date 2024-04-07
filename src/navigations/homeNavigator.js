import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contents from '../screens/Contents';
import Description from '../screens/Description';
import Playlists from '../screens/playlists';
import {

  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
  
} from 'react-native'
import { Avatar, Button, Card } from 'react-native-paper';

const HomeNavigator = () => {
  const stack = createNativeStackNavigator();

  const MyComponent = () => (
    <View style={{ flexDirection:"row" , padding: 5 ,backgroundColor:'rgba(200, 200, 0, 0.2)',}}>
      <View style={{margin:5}}>
      <Button buttonColor='rgba(202,129,76,255)' mode="contained" onPress={() => console.log('Pressed')}>
      PodCasts
    </Button>
      </View>
      <View style={{margin:5}}>
      <Button style={{}}  buttonColor='rgba(202,129,76,255)' mode="contained" onPress={() => console.log('Pressed')}>
     Songs
   </Button>
      </View>
    </View>  
  );
  
  return (
    <stack.Navigator headerMode="screen">
      <stack.Screen 
      name="playlists"
        options={{
          title: 'Playlists',
          header: MyComponent,
          headerTintColor: 'royalblue',
           headerStyle: {
            backgroundColor: 'rgba(200, 200, 0, 0.2)',
          }
        }} 
        component={Playlists}></stack.Screen>
      <stack.Screen 
      options={{
        title: 'Playlists',
        header: MyComponent,
        headerTintColor: 'royalblue',
         headerStyle: {
          backgroundColor: 'rgba(200, 200, 0, 0.2)',
        }
      }} 
      name="description" 
      component={Description}></stack.Screen>
      <stack.Screen 
      options={{
        title: 'Playlists',
        header: MyComponent,
        headerTintColor: 'royalblue',
         headerStyle: {
          backgroundColor: 'rgba(200, 200, 0, 0.2)'
        }
      }} 
      name="contents" component={Contents}></stack.Screen>
    </stack.Navigator>
  )
}

export default HomeNavigator
