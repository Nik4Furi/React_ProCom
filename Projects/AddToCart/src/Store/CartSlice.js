import { createSlice } from '@reduxjs/toolkit';


const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        

        add(state, action) { // Add items into cart
            state.push(action.payload);
        },

        remove(state, action) {    //Remove item from cart
            return state.filter((item) => item.id != action.payload);
        }
    }
})

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;