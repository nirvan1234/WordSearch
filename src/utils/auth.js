import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const signUp = (fullname, email, password) =>{
    if(fullname || !email || !password){
        Alert("enter data")
    }else {
        return auth().createUserWithEmailAndPassword(email.trim().password).
        then( cred => {
            const {uid} = cred.user;
            auth().currentUser.updateProfile({
                displayName: fullname
            })
        return uid;
        }).catch(
            err => Alert(err.code,err.message)
        )
    }

}

const signin = (email, password) =>{
    if(!email || !password){
        return auth().signInWithEmailAndPassword(email.trim().password).then(
            () =>{
              console.log(auth().currentUser.uid);
            }
        ).catch(
            err => Alert(err.code,err.message)
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