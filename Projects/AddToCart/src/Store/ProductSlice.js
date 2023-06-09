import { createSlice } from "@reduxjs/toolkit";


//Status define initially
export const STATUS = Object.freeze({
    LOADING: 'loading',
    IDEL: 'idel',
    ERROR: 'error'
})

const ProductSlice = createSlice({
    name : 'product',
    initialState : {
        data : [],
        status : STATUS.IDEL
    },
    reducers : {
        setStatus(state, action) {  //Echecking our apis request status
            state.status = action.payload;
        },
        setProducts(state,action){ //initialzing our products 
            state.data = action.payload
        }
    }
})

export const {setProducts, setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;


//Thunk Specific Stuff
//Fectching all products from the apis
export function FetchProducts() {
    //dispatch : call the functions
    //getstate: you have the state, in which you make changes

    return async function fetchProductsThunk(dispatch, getstate) {
        dispatch(setStatus(STATUS.LOADING));

        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json();
            dispatch(setProducts(data));

            dispatch(setStatus(STATUS.IDEL));
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));

        }
    }
}