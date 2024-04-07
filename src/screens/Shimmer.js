import React from 'react'
import {
    View ,
    StyleSheet,
  } from 'react-native'

const Shimmer = () => {
  return (
    <View>
    <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>
   <View style={styles.mainContainer}>

   </View>

 </View>
  )
}

export default Shimmer


const styles =  StyleSheet.create({
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

})