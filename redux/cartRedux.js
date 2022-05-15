import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
      state.quantity += 1;
    },
    removeProduct: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product._id !== payload
      );
      state.quantity -= 1;
    },
    increaseProduct: (state, { payload }) => {
      // state.products[payload].count += 1;
      // state.quantity += 1;

      const cartItem = state.products.find((item) => item.id === payload._id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decreaseProduct: (state, { payload }) => {
      state.products[payload].count -= 1;
      state.quantity -= 1;
    },
    calculateTotals: (state) => {
      let count = 0;
      let total = 0;
      state.products.forEach((product) => {
        count += product.count;
        total += product.count * product.price;
      });
      state.quantity = count;
      state.total = total;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct,
  calculateTotals,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
