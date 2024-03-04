import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Pressable, Button
} from 'react-native'

import logo from '../assets/images/evolvePune.png'
 const  Login =  () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMode='stretch'

        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title}>Stay Connected with Evolve Pune</Text>
        <Text style={styles.text}>Sign In with Account</Text>
        <View style={styles.button}>
          <TouchableOpacity>
            <View>
              <Pressable onPress={() =>{
            console.log("navigation")
            navigation.navigate("signup")
          }} style={styles.signIn}>
                <Text style={styles.textSign}>Get Started
                </Text>

              </Pressable>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(200, 200, 0, 0.2)'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    backgroundColor: '#264653',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 50,
    // marginTop: 10,
    // marginLeft: 150,
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Login;



