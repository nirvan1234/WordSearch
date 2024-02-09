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
  } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';
import {  getProductDetails} from '../context/actions'; 

const Contents = () => {

  const {name , age , product} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProductDetails("abcd"))
   

  },[])

  return (
    <View>
    <Text>Contents</Text>
   </View>
  )
}

export default Contents
