import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
};


export const FetchingProduct = createAsyncThunk(
    'product/fetching',
    async () => {
        const options = { method: 'GET', url: 'http://localhost:5000/ecom/allproducts' };
       const data = await axios.request(options)
            const product = await data.data
            if (product) {
                // console.log(name);
            return product
            }
        

    }
)



const GetProduct = createSlice({
    name: "ProductGetting",
    initialState: {
        products: [],
        GetStatus: STATUSES,
    },
    reducers:{
        addProduct:(state,action)=>{

        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchingProduct.pending, (state, action) => {
            state.GetStatus = STATUSES.LOADING;
        });
        builder.addCase(FetchingProduct.fulfilled, (state, action) => {
            // console.log(action)
            state.products = action.payload.products
            state.GetStatus = STATUSES.IDLE;
        });
        builder.addCase(FetchingProduct.rejected, (state, action) => {
            state.GetStatus = STATUSES.ERROR;
        });
    }
})

const { reducer } = GetProduct

export default reducer

