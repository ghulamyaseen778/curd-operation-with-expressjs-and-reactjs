import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
};


export const UpdatingProduct = createAsyncThunk(
    'product/Upadating',
    async (UpadateData) => {
        const options = {
            method: 'PUT',
            url: 'http://localhost:5000/ecom/product',
            data: UpadateData
        };
        const data = await axios.request(options)
        const Updateproduct = await data.data
        if (Updateproduct) {
            // console.log(product);
            return Updateproduct
        }


    }
)



const UpdateProduct = createSlice({
    name: "ProductUpdate",
    initialState: {
        Updateproduct: {},
        UpdateStatus: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(UpdatingProduct.pending, (state, action) => {
            state.UpdateStatus = STATUSES.LOADING;
        });
        builder.addCase(UpdatingProduct.fulfilled, (state, action) => {
            // console.log(action)
            state.Updateproduct = action.payload.updateProduct
            state.UpdateStatus = STATUSES.IDLE;
        });
        builder.addCase(UpdatingProduct.rejected, (state, action) => {
            state.UpdateStatus = STATUSES.ERROR;
        });
    }
})

const { reducer } = UpdateProduct

export default reducer
