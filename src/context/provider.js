import {  applyMiddleware ,combineReducers } from "redux";
import thunk from 'redux-thunk'
import userReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const rootReducer = combineReducers({userReducer});


export const store =  configureStore({
    reducer :rootReducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })});


