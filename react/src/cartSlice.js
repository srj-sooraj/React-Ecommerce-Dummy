import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find(
        item => item.id === action.payload.id
      );
      if (!exists) {
        state.items.push(action.payload);
      }
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
