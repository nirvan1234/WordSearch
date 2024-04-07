import React,{useState , useContext} from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';

import { Auth } from '../utils'
import {Avatar} from 'react-native-paper';
import { checkValidData } from '../utils/validate';
import AtRate from '../assets/images/attherate.png'
import { AuthContext } from '../utils/authContext';
import lockIcon from '../assets/images/iconsLock.png'
import unlockIcon from '../assets/images/iconsunlock.png'
import checkIcon from '../assets/images/iconCheck.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({navigation}) {

   const {setIsLoggedIn} = useContext(AuthContext);

  const [data, setData] = useState({
     email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
  })
  const [emailerrorMessage, setEmailErrorMessage] = useState("");
  const [passworderrorMessage, setPasswordErrorMessage] = useState("");


  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }

  const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const prefrences = async () =>{
    try {
      await AsyncStorage.setItem("loginKey", "true" );
    } catch (error) {
      console.log(error);  
    }

  }

  const loginhandle = () =>{
    console.log("bahar",data.email, data.password);
    if(checkValidData("Test Name",data.email, data.password) == null){
      console.log("andar");
      Auth.signin(data.email, data.password);
      if(Auth.signin(data.email, data.password) != "malformed or has expired"){
         setIsLoggedIn(true)
         prefrences();
      }
      

    }else if (checkValidData("Test Name" ,data.email, data.password) === "Email Id is not valid"){

      setEmailErrorMessage(checkValidData("Test Name",data.email, data.password));

    }else{
      setPasswordErrorMessage(checkValidData("Test Name",data.email, data.password));
    }
   
  }

  const textInputChange = (val) =>{
      if(val.length !== 0){
          setData({
            ...data,
            email: val,
            check_textInputChange: true
          })
      }else{
        setData({
          ...data,
          email: val,
          check_textInputChange: false
        })

      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text_header}>Welcome ! </Text>
      </View>
      <View style={styles.footer}>
      <Text style={styles.text_footer}>Email</Text>
      <View style={styles.action}>
      <Avatar.Icon  size={28} icon="email" /> 
       
        <TextInput
          placeholder='Your Email' 
          style={styles.textInput}
          autoCapitalize='none'
          onChangeText={(val) => textInputChange(val)}/>
          {data.check_textInputChange? 
           <Avatar.Image size={24} source={checkIcon} /> : null }
         
      </View>
      {
        emailerrorMessage != "" ? <Text style={styles.errorMessageStyle}>{emailerrorMessage}</Text> : null
      }
      <Text style={[styles.text_footer,{
        marginTop: 35
      }]}>Password</Text>
      <View style={styles.action}>
      <Avatar.Icon  size={28} icon="file-lock" /> 
        <TextInput
          placeholder='Your Password' 
          style={styles.textInput}
          secureTextEntry={data.secureTextEntry ? true : false}
          autoCapitalize='none'
          onChangeText={(val) => handlePasswordChange(val)}/>
          <TouchableOpacity
          onPress={ updateSecureTextEntry}
          >
            {data.secureTextEntry ? 
            <Avatar.Icon  size={28} icon="eye" /> :  
            <Avatar.Icon  size={28} icon="eye-off" /> }
          </TouchableOpacity>
      </View>
      {
        passworderrorMessage != "" ? <Text style={styles.errorMessageStyle}>{passworderrorMessage}</Text> : null
      }

      <TouchableOpacity>
             <View>
             <Pressable  
             onPress={loginhandle}
             style={styles.signIn}>
           <Text style={[styles.textSign , { color: "#fff"}]}>Sign In
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>

      <TouchableOpacity>
             <View>
             <Pressable  
             onPress={ () => navigation.navigate('register')}
             style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
           <Text style={styles.textSign}>Sign Up
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  errorMessageStyle:{
    padding:5,
    fontSize:14,
    color:"red"

  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: "#5F9EA0",
      marginTop:60
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
})
// import React ,{useState} from 'react'
// import { Auth } from '../utils'
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

// const SignUP = () => {
//   const [email , setEmail] = useState()
//   const [password , setPassword] = useState()
//   const [name , setName] = useState("")
//   return (
//     <View style={styles.container}>
//     <Text style={styles.textContent}>Login/Register</Text>
//     <TextInput 
//     placeholder='Enter Name'
//     onChangeText={(e) => setName(e)}
//      style={{
//       width:'90%',
//       height:50,
//       borderRadius:10,
//       borderWidth:0.5,
//       alignItems:"center",
//       marginTop:100,
//       alignSelf:"center",
//       padding:10
//      }}
//     />
//     <TextInput 
//     placeholder='Enter Email'
//     onChangeText={(e) => setEmail(e)}
//      style={{
//       width:'90%',
//       height:50,
//       borderRadius:10,
//       borderWidth:0.5,
//       alignItems:"center",
//       marginTop:100,
//       alignSelf:"center",
//       padding:10
//      }}
//     />
//     <TextInput 
//     placeholder='Enter Password'
//     onChangeText={(e) => setPassword(e)}
//      style={{
//       width:'90%',
//       height:50,
//       borderRadius:10,
//       borderWidth:0.5,
//       alignItems:"center",
//       marginTop:20,
//       alignSelf:"center",
//       padding:10
//      }}
//     />
//     <TouchableOpacity
//     onPress={() => Auth.signUp(name ,email, password)}
//     style={{
//       width:"90%",
//       height:50,
//       backgroundColor:"orange",
//       borderRadius:10,
//       marginTop:20,
//       alignSelf:"center",
//       justifyContent:"center",
//       alignItems:"center"
//     }}
//     >
//       <Text style={{fontSize:20, color:"#000"}}>SignUP</Text>
//     </TouchableOpacity>
//    </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1
//   },
//   textContent:{
//    alignSelf:"center",
//    marginTop:100,
//    fontSize:20,
//   },
//   Content:{
//     width:'90%',
//     height:50,
//     borderRadius:10,
//     borderWidth:0.5,
//     alignItems:"center",
//     marginTop:100,
//     alignSelf:"center"
//    }

// })

// export default SignUP