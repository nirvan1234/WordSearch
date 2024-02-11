import React,{useState, useCallback} from 'react'
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
    Dimensions
  } from 'react-native'
  import YoutubeIframe from 'react-native-youtube-iframe';

 
  const DimensionsforScreen = Dimensions.get('window').width;
  const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height

const Description = ({route}) => {

  const [playing, setPlaying] = useState(false);

  const {videoId}= route.params.contentDetails;

  const {description}= route.params.snippet;


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
 


  return (
    <View style={{    
        flex:1,
        height:windowHeight,
        width:windowWidth,

      }}>
    <YoutubeIframe 
    height={300}
    width={DimensionsforScreen.width}
    play={playing}
    videoId={videoId}
    onChangeState={onstateChanged}
    />
    <Text>
    {description}
    </Text>
   </View>
  )
}

export default Description
