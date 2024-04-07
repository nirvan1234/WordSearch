import React,{useEffect, useState} from 'react'
import {
  Button,
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
  ImageBackground,
  FlatList
  } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import {  getProductDetails} from '../context/actions'; 
import ShowPlayListVideo from '../components/ShowPlayListVideo';
import Shimmer from './Shimmer';

const windowWidth = Dimensions.get('window').width;

const Contents = ({route}) => {

  const {productDetails} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  

  useEffect(()=>{
    dispatch(getProductDetails(route.params))
   
  },[])

  return (
    <View style={styles.container}>

      {productDetails.length === 0 ?
      <Shimmer />
      :
      <FlatList 
     data={productDetails}
     keyExtractor={(item) => item.id}
     renderItem={({item}) => <ShowPlayListVideo  data={item} />}
     
     />
      }
    
    </View>
   )
  
  }
  


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgba(200, 200, 0, 0.2)'
    // alignItems:'center',
    // justifyContent:'center'

  },
  ageText:{
    width: windowWidth/1.5,
    height: 60,
    padding:10,
    borderWidth: 1,
    margin: 12,

  },
  nameText:{
    width: windowWidth/1.5,
    height: 60,
    padding:10,
    borderWidth: 1,
    margin: 12,
  },
  textShow:{
    fontSize:21,
    fontWeight:400
  }
})

export default Contents
