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
    ImageBackground
  } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setAge,setName , getProduct} from '../context/actions'; 
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const ShowPlayListItem = ({data}) =>{
  const navigation = useNavigation();
  return(
    <View style={{
      flex:1,
      height: 190,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#FFA70B",
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
      marginRight: 16,}}>
      <View 
      style={{
        alignItems:'center',
        justifyContent:'space-between',
       flexDirection:"row"
       
      }}>
       
        <ImageBackground 
        source={{uri:data.snippet.thumbnails.medium.url}}
        resizeMode='stretch'
        style={{
          height:150,
          width:150
        }}
        />
        <View 
        style={{
          height:150,
          width:150,
          padding:10,
          justifyContent:"space-between"

        }}> 
        <Text 
        style={{
          fontSize:16,
          fontWeight:600

        }}>
          {data.snippet.title}
        </Text>
      
        <TouchableOpacity
        style={
          {
            width: 150,
            height:40,
            borderRadius:16,
            backgroundColor:"#fff",
            alignItems:"center",
            justifyContent:"center"
          }
        }
        onPress={()=>{
          console.log("navigation")
          navigation.navigate("contents")
        }
        }>
          <Text
          style={{
            fontSize:14,
            fontWeight:600
  
          }}
          >Watch Now</Text>

        </TouchableOpacity>

        </View>
         

      

      </View>
        
      </View>
  )
}


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
