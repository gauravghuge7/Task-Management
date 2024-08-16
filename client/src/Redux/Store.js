import {combineReducers, configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './reducers';

const rootReducer = combineReducers({
    employeeReducer
})


export const store = configureStore({

    reducer: rootReducer,
})