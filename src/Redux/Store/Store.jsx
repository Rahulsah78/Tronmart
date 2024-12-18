import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../Allslices/CartSlice";


// create store 

export const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})