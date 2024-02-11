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
import { setAge,setName , getProduct} from '../context/actions'; 
import ShowPlayListItem from '../components/ShowPlayListItem';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height




const Playlists = () => {

  const {name , age , product} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProduct())
   

  },[])


 

  return (
   <View style={styles.container}>
   
    {/* <Text style={styles.textShow}>{name}</Text>
    <Text style={styles.textShow}>{age}</Text>

    <TextInput 
    placeholder='Please Enter your Name'
    value={name}
    onChangeText={ (value) => dispatch(setName(value))}
    style={styles.ageText}

    />
    <TextInput 
    placeholder='Please Enter your Age'
    value={age}
    onChangeText={ (value) => dispatch(setAge(value))}
    style={styles.ageText}
    /> */}
    <FlatList 
    data={product}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <ShowPlayListItem  data={item} />}
    
    />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
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

export default Playlists
