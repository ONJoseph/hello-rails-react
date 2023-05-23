import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGreeting = createAsyncThunk('getGreeting', async() => {
    const API_URL = 'http://localhost:3000/api/messages';
    const response = await fetch(API_URL);
    const data = await response.json();
    return [data.greeting];
})

const greetingReducer = (state = [], action) => {
    switch(action.type) {
        case 'getGreeting/fulfilled':
            return action.payload;
        default:
            return state;
    }
}

export default greetingReducer;
