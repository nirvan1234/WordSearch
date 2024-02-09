import {SET_USER_AGE, SET_USER_NAME, GET_PRODUCT, GET_PRODUCT_DETAILS} from '../actions';

const initialState = {
    name: "",
    age: "",
    product:[],
    productDetails:[]
}

function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER_AGE:
            return {
            ...state,
            age: action.payload


        };

        case SET_USER_NAME:
            return {
                ...state,
                name: action.payload

        };

        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload

        };

        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                product: action.payload

        };


        default:
        return state

    }
    

}

export default userReducer;