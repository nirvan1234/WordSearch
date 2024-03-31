import React,{useState, useCallback} from 'react'
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
  import YoutubeIframe from 'react-native-youtube-iframe';
  import { Avatar, Button, Card } from 'react-native-paper';
 

 
  const DimensionsforScreen = Dimensions.get('window').width;
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const Description = ({route}) => {

  const [playing, setPlaying] = useState(false);

  const {videoId}= route.params.contentDetails;

  const {description , title}= route.params.snippet;



const onstateChanged = useCallback(state =>{

  if(state === "ended"){
    setPlaying(false)

  }
  if(state === "playing"){
    setPlaying(true)
  }

  if(state === "paused"){
    setPlaying(false)

  }
  

},[])

const togglePlaying = useCallback(() => {
  setPlaying((prev) => !prev);
}, []);
 


  return (
    <ScrollView style={styles.container}>
    
   
    <Card style={{padding:2 ,margin:10 , backgroundColor:"#FFA70B", flex:1}}>
 
    <Card.Content>
    <YoutubeIframe 
    height={250}
    width={DimensionsforScreen.width}
    play={playing}
    videoId={videoId}
    onChangeState={onstateChanged}
    />
     <Text  style={{padding:1 , fontSize: 25  }} variant="titleLarge">{title}</Text>
    </Card.Content>
   
    <Card.Actions>
      <View style={{ justifyContent:"space-between", paddingTop:29,flexDirection:"row", flex:1}}>
      <Avatar.Icon size={48} icon="plus" />
      <View > 
    <TouchableOpacity onPress={togglePlaying}>
      {playing ?  <Avatar.Icon  size={48} icon="pause" />  :  <Avatar.Icon size={48} icon="play" />}
    </TouchableOpacity>
      </View>
    
      </View>

   
    </Card.Actions>
  </Card>

   </ScrollView>
  )
}

export default Description

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: windowWidth,
    height: windowWidth,
    backgroundColor: 'rgba(200, 200, 0, 0.2)'
    
  }

})