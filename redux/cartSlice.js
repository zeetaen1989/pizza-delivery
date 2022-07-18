import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addProduct: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === newProduct._id
      );

      if (!existingProduct) {
        state.products.push(newProduct);
        state.totalQuantity++;
      } else {
        existingProduct.quantity++;
      }
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === id
      );
      state.totalQuantity--;

      if (existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product._id !== id);
      } else {
        existingProduct.quantity--;
      }
    },
    addPrice: (state, action) => {
      const price = action.payload;

      const existingProduct = state.products.find(
        (product) => product._id === price._id
      );

      if (existingProduct) {
      }

      state.totalPrice += existingProduct.price;
    },
    calculateTotals: (state) => {
      let total = 0;
      state.products.forEach((product) => {
        total += state.totalPrice + product.quantity * product.price;
      });
      state.totalAmount = total;
    },
    resetCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const selectAllProducts = (state) => state.cart.products;

export const {
  addProduct,
  removeProduct,
  addPrice,
  calculateTotals,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
