import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
};


export const DeletingProduct = createAsyncThunk(
    'product/Deleting',
    async (id) => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/ecom/product',
            data: {id: id}
          };
       const data = await axios.request(options)
            const product = await data.data
            if (product) {
                // console.log(name);
            return product
            }
        

    }
)



const DeleteProduct = createSlice({
    name: "ProductDeleting",
    initialState: {
        DeletingProduct: {},
        delStatus: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(DeletingProduct.pending, (state, action) => {
            state.delStatus = STATUSES.LOADING;
        });
        builder.addCase(DeletingProduct.fulfilled, (state, action) => {
            // console.log(action)
            state.delStatus = STATUSES.IDLE;
            state.DeletingProduct = action.payload.data
        });
        builder.addCase(DeletingProduct.rejected, (state, action) => {
            state.delStatus = STATUSES.ERROR;
        });
    }
})

const { reducer } = DeleteProduct

export default reducer

