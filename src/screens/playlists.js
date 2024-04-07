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
  import Shimmer from './Shimmer';
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
    {product.length === 0 ? 
    <Shimmer />
      :
      <FlatList 
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <ShowPlayListItem  data={item} />}
      
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
  mainContainer:{
    height: 190,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffff",
    opacity:0.9,
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
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
