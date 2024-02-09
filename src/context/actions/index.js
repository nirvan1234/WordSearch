export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_USER_NAME = 'SET_USER_NAME';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';

const API_URL = 'https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCGQp8evTZ0jA-L538LuFfsA&maxResults=25&key=AIzaSyDzjbNLfFr8LS1v90XOy-oWLO8DUdTqZOI';

export const getProduct = () =>{
    try {
     return async dispatch =>{
        // const result = await fetch(API_URL);

        const result =  await fetch(API_URL,{
            method:'GET',
            headers:{
                'content-Type':'application/json',
            }
        });
        const json = await result.json();
       
        if(json){
            dispatch({
                type:GET_PRODUCT,
                payload: json.items
            })
        }else{
          console.log("unable to fetch")
        }
     }
        
    } catch (error) {

        console.log(error);
        
    }
   
}

export const getProductDetails =(key) =>{


    console.log(key);

    try {

        return  dispatch =>{
            dispatch({
                type: GET_PRODUCT_DETAILS,
                payload: ""
            })
            
        }
        
    } catch (error) {
        
    }
   

}

export const setName = name => dispatch =>{
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })

}

export const setAge = age => dispatch =>{
    dispatch({
        type: SET_USER_AGE,
        payload: age
    })

}
