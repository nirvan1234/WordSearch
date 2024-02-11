import React from 'react'
import { useNavigation } from '@react-navigation/native';
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
            navigation.navigate("contents", data.id)
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

export default ShowPlayListItem
