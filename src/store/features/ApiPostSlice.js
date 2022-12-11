import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const STATUSES = {
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
};


export const PostingProduct = createAsyncThunk(
    'product/Posting',
    async ({title,desc,price}) => {
        const options = { method: 'POST',
        url: 'http://localhost:5000/ecom/product',
        data: {
          title: title,
          desc: desc,
          price: price
        } };
       const data = await axios.request(options)
            const Postproduct = await data.data
            if (Postproduct) {
                // console.log(product);
            return Postproduct
            }
        

    }
)



const PostProduct = createSlice({
    name: "ProductPosting",
    initialState: {
        Postproduct:{},
        PostStatus: STATUSES,
    },
    extraReducers: (builder) => {
        builder.addCase(PostingProduct.pending, (state, action) => {
            state.PostStatus = STATUSES.LOADING;
        });
        builder.addCase(PostingProduct.fulfilled, (state, action) => {
            // console.log(action)
            state.Postproduct = action.payload.data
            state.PostStatus = STATUSES.IDLE;
        });
        builder.addCase(PostingProduct.rejected, (state, action) => {
            state.PostStatus = STATUSES.ERROR;
        });
    }
})

const { reducer } = PostProduct

export default reducer

