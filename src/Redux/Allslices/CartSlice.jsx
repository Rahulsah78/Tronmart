import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}


// create store 
const CartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {


        // add to cart 
        addtocart: (state, action) => {
            const findindex = state.carts.findIndex((item) => item.id === action.payload.id);
            console.log(findindex);
            if (findindex >= 0) {
                state.carts[findindex].qty += 1
            } else {
                const quantity = { ...action.payload, qty: 1 }
                state.carts = [...state.carts, quantity];
            }
        },
        // remove tem from cart 
        removeToCart: (state, action) => {
            const data = state.carts.filter((element) => element.id !== action.payload);
            state.carts = data;
        },
        // decrease quantity
        decreaseQuantity: (state, action) => {
            const findIndexDecrease = state.carts.findIndex((item) => item.id === action.payload.id);

            if (findIndexDecrease >= 0) {
                // Check if the quantity is greater than 1, then decrease
                if (state.carts[findIndexDecrease].qty > 1) {
                    state.carts[findIndexDecrease].qty -= 1;
                } else if (state.carts[findIndexDecrease].qty === 1) {
                    // If quantity is 1, decrease to 0 and remove item
                    state.carts[findIndexDecrease].qty -= 1;
                    // Remove the item when qty reaches 0
                    state.carts = state.carts.filter((item) => item.id !== action.payload.id);
                }
            }
        },


    }

});

export const { addtocart, removeToCart, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer; 