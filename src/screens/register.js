import React,{useState} from 'react'
import {Avatar} from 'react-native-paper';
 import { Auth } from '../utils'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  Pressable,
  Dimensions,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import logo from '../assets/images/evolvePune.png';
import AtRate from '../assets/images/attherate.png'
import { checkValidData } from '../utils/validate';
import lockIcon from '../assets/images/iconsLock.png'
import unlockIcon from '../assets/images/iconsunlock.png'
import checkIcon from '../assets/images/iconCheck.png'




export default function Register({navigation}) {

  const [data, setData] = useState({
    email: '',
        password: '',
        name:"",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
  })

  const [emailerrorMessage, setEmailErrorMessage] = useState("");
  const [passworderrorMessage, setPasswordErrorMessage] = useState("");
  const [nameerrorMessage, setNameErrorMessage] = useState("");


  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    })
  }
  
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      name: val
    })
  }

  const updateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const confirmUpdateSecureTextEntry = () =>{
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
      
    })
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

  const onPressRegister = ()=>{
    console.log(checkValidData(data.name ,data.email, data.password))
    if(checkValidData(data.name ,data.email, data.password) == null){

      Auth.signUp(data.name ,data.email, data.password)
      navigation.navigate('signin')

    }else if (checkValidData(data.name ,data.email, data.password) === "Email Id is not valid"){

      setEmailErrorMessage(checkValidData(data.name ,data.email, data.password));

    }else if(checkValidData(data.name ,data.email, data.password) === "Name is not valid"){
      setNameErrorMessage(checkValidData(data.name ,data.email, data.password));
    }else{
      setPasswordErrorMessage(checkValidData(data.name ,data.email, data.password));
    }
  
   
  }

  return (
    <ScrollView style={{flex:1}}>
       <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.text_header}>Register Now! </Text>
     
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
           <Avatar.Image size={24} source={lockIcon} /> : null }
         
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
      <Text style={[styles.text_footer,{
        marginTop: 35
      }]}>Full Name</Text>
      <View style={styles.action}>
      <Avatar.Icon  size={28} icon="account" /> 
        <TextInput
          placeholder='Your Full Name' 
          style={styles.textInput}
         
          autoCapitalize='none'
          onChangeText={(val) => handleConfirmPasswordChange(val)}/>
          <TouchableOpacity
          onPress={ confirmUpdateSecureTextEntry}
          >
            {/* {data.secureTextEntry ? 
           <Avatar.Image size={24} source={unlockIcon} />:  
           <Avatar.Image size={24} source={lockIcon} />} */}
          </TouchableOpacity>
      </View>
      {
        nameerrorMessage != "" ? <Text style={styles.errorMessageStyle}>{nameerrorMessage}</Text> : null
      }
      

      <TouchableOpacity>
             <View>
             <Pressable  style={styles.signIn}  onPress={ onPressRegister}>
           <Text style={[styles.textSign , { color: "#fff"}]}>Sign Up
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>

      <TouchableOpacity>
             <View>
             <Pressable  
             onPress={() =>  navigation.navigate('signin') }
             style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}>
           <Text style={styles.textSign}>Sign In
           </Text>
           
           </Pressable>
           </View>
      </TouchableOpacity>
      </View>
    
    </SafeAreaView>
    </ScrollView>
   
  )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  errorMessageStyle:{
    padding:5,
    fontSize:14,
    color:"red"

  },
  header: {
      // flex: 1,
      height:290,
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
      marginTop:50
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

// const Register = () => {
//   const [email , setEmail] = useState()
//   const [password , setPassword] = useState()
//   return (
//     <View style={styles.container}>
//     <Text style={styles.textContent}>Login/Register</Text>
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
//     onPress={() => Auth.signin(email, password)}
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
//       <Text style={{fontSize:20, color:"#000"}}>Login</Text>
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

// export default Register
