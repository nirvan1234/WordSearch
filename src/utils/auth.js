import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const signUp = (fullname, email, password) =>{
    if(!fullname || !email || !password){
        console.log("enterData" , fullname, email, password)
    }else {
     
        return auth().createUserWithEmailAndPassword(email.trim(),password).
        then( cred => {
            const {uid} = cred.user;
            console.log(auth());
            auth().currentUser.updateProfile({
                displayName: fullname
            })
        return uid;
        
        }).catch(
            err => console.log(err.code,err.message)
        )
    }

}

const signin = (email, password) =>{
    console.log(email, password);
    if(!email || !password){
        console.log("enterData" , email, password)
    }else{
        console.log("ihgigkjh");
        return auth().signInWithEmailAndPassword(email.trim(),password).then(
            () =>{
              console.log("auth",auth().currentUser);
              return auth().currentUser.uid;
            }
        ).catch(
            err =>  {return err.message }
        )
    }
}

const signOut = () =>{
    return auth().signOut();
}

const Auth = {
    signOut,
    signUp,
    signin
}

export default Auth;