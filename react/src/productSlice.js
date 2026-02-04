import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await fetch('https://dummyjson.com/products');
    return res.json();
   
  }
);


const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        error: null,
        loading: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload.products;
                state.loading = false;
                console.log('fullfilled');
                
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to fetch products';
                console.log('rejected');
                
            });
    },
}); 


export default productSlice.reducer;