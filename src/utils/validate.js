export const checkValidData = (name ,email , password) =>{
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[-\#\$\.\%\&\@\!\+\=\<\>\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/.test(password);
    const isNameValid=  /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)

    if(!isEmailValid){
        return "Email Id is not valid"
    }

    if(!isPasswordValid){
        return "Password is not valid"
    }

    if(!isNameValid){
        return "Name is not valid"
    }

    return null

}