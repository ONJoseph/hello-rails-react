import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetingReducer";

const rootReducer = {
    greetings: greetingReducer
}

const store = configureStore({reducer: rootReducer})

export default store;
