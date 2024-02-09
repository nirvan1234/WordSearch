// import React from 'react'
// import {
//     Button,
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     useColorScheme,
//     View,
//   } from 'react-native'

// const VideoCall = () => {
//   return (
//     <View>
//     <Text>Contents</Text>
//    </View>
//   )
// }

// export default VideoCall;
import React, { Component } from 'react';
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
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function VoiceCall(props) {

    const styles = StyleSheet.create({
        container:{

        }

    })


    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1170310947}
                appSign={"81435e6d0208b809efd8e308bc4e67a9369abce15d50ffca43719e2b4e73d524"}
                userID={userID} // userID can be something like a phone number or the user id on your own user system. 
                userName={userName}
                callID={callID} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('HomePage') },
                    onHangUp: () => { props.navigation.navigate('HomePage') },
                }}
            />
        </View>
    );
}


