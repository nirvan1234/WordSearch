import React,{useEffect, useState} from 'react';
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

import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App(){

  const [words,setWords] = useState("");
  const [wordArr,setWordArr] = useState(["EGG", "MILK", "JAM","OATS" , "POHA"]);
  const [ successMessage, setSuccessMessage] = useState("")
   
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  useEffect(() =>{
    placeCorrectLetters(wordArr)
 
  },[])

  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 

  var nrum = Math.floor(Math.random() * characters.length );
  
  // let randomChar = ""

  // useEffect(() =>{
  // let randomChar =  Math.floor(Math.random() * characters.length);
  // })

  var col = 5
  var row = 5
  var lopArr = [];

  function placeCorrectLetters(w){
    var out = ''
    
    for(var i = 0; i < w.length; i++){
      var positions = ["row", "coloumn", "diagonal"]
      var orientation = positions[Math.floor(Math.random()*positions.length)]
      // var start = Math.floor(Math.random()*col*row)
      // var actualIndex = start -1;
      // var checkPos = actualIndex.toString().padStart(2,0);
      // var assignPos = [...checkPos.toString()]
      // var myrow = assignPos[0]
      // var mycolm = assignPos[1]

      lopArr.push(orientation +" " + w[i] + " " );

    //  out =  out + " " +orientation +" " + w[i] + " "  + i + " ,"
    }
    
    return  lopArr;
   
  }

  console.log(placeCorrectLetters(wordArr));

  const CharChange =(e) =>{
    console.log(e);
    setWords(e);

  }

  
const performAct = () =>{


 if(words.length >0 && wordArr.includes(words)){
  setSuccessMessage("Hooray Great!")

 }else{
  setSuccessMessage("Please Try Again")
 }

 setWords("")
}

 
  

  return (
    <NavigationContainer>
     <SafeAreaView style={{flex:1}}>
      
  {[...Array(col)].map((itemCol , indexCol) =>
   <View style={{flex:1 , padding:10, flexDirection:"row"}} key={indexCol}>
     {[...Array(row)].map((itemrow , indexrow) => 



   <View style={{height:60, width:60,  backgroundColor:"#FF0000" , padding:5, margin:5}} key={indexrow}>
     
    
     <Text style={styles.sectionTitle}>
     {lopArr[indexCol] ? lopArr[indexCol].split(" ")[1][indexrow] ? lopArr[indexCol].split(" ")[1][indexrow] : characters.split("").slice(nrum, nrum +1):""}
    </Text>
  
  
 </View>
   )}
   
     

 </View>
   )}
   <View style={{flexDirection:"row"}}>
   <View style={{height:40, width:200, margin:10  }}>
  <Text style={styles.sectionTitleTwo}>{successMessage}</Text>
  </View>
  {/* <View style={{height:40, width:100, margin:10   }}>
      <TouchableOpacity style={{ alignItems:"center",height:40, width:100, backgroundColor:"#DDDD" , justifyContent:"center"}} onPress={performAct}>
        <Text>Play Again</Text>
  </TouchableOpacity>
      </View> */}
  </View>
      <View style={{flexDirection:"row"}}>
      <View style={{height:40, width:200, margin:10  }}>
  <TextInput 
  placeholder='Please Enter your Guess'
  value={words}
  onChangeText={text => CharChange(text)}
  style={{ borderColor:"#000" , borderWidth:1 , padding:10}}

  />

</View>

      <View style={{height:40, width:100, margin:10   }}>
      <TouchableOpacity style={{ alignItems:"center",height:40, width:100, backgroundColor:"#DDDD" , justifyContent:"center"}} onPress={performAct}>
        <Text>Check</Text>
  </TouchableOpacity>
      </View>
      </View>


  
  
      
     </SafeAreaView>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionTitleTwo:{
    fontSize: 24,
    fontWeight: '600',
    padding:5

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
