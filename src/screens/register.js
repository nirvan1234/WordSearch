import React ,{useState} from 'react'
import { Auth } from '../utils'
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

const Register = () => {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  return (
    <View style={styles.container}>
    <Text style={styles.textContent}>Login/Register</Text>
    <TextInput 
    placeholder='Enter Email'
    onChangeText={(e) => setEmail(e)}
     style={{
      width:'90%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      alignItems:"center",
      marginTop:100,
      alignSelf:"center",
      padding:10
     }}
    />
    <TextInput 
    placeholder='Enter Password'
    onChangeText={(e) => setPassword(e)}
     style={{
      width:'90%',
      height:50,
      borderRadius:10,
      borderWidth:0.5,
      alignItems:"center",
      marginTop:20,
      alignSelf:"center",
      padding:10
     }}
    />
    <TouchableOpacity
    onPress={() => Auth.signin(email, password)}
    style={{
      width:"90%",
      height:50,
      backgroundColor:"orange",
      borderRadius:10,
      marginTop:20,
      alignSelf:"center",
      justifyContent:"center",
      alignItems:"center"
    }}
    >
      <Text style={{fontSize:20, color:"#000"}}>Login</Text>
    </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  textContent:{
   alignSelf:"center",
   marginTop:100,
   fontSize:20,
  },
  Content:{
    width:'90%',
    height:50,
    borderRadius:10,
    borderWidth:0.5,
    alignItems:"center",
    marginTop:100,
    alignSelf:"center"
   }

})

export default Register
