import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({

    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {

        addToCart: (state: any, action): any => {
            const itemPresent: any = state.cart.find(
                (item: any) => item.id === action.payload.id
            );
            if (itemPresent) {
                itemPresent.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const removeItem = state.cart.filter(
                (item:any) => item.id !== action.payload.id
            );
            state.cart = removeItem;
        },
        incrementQuantity: (state, action) => {
            const itemPresent:any = state.cart.find(
              (item:any) => item.id === action.payload.id
            );
            itemPresent.quantity++;
          },
          decrementQuantity: (state, action) => {
            const item:any = state.cart.find((item:any) => item.id === action.payload.id);
            if (item.quantity === 1) {
              const removeItem = state.cart.filter(
                (item:any) => item.id !== action.payload.id
              );
              state.cart = removeItem;
            } else {
              item.quantity--;
            }
          },
          cleanCart:(state) => {
            state.cart = [];
          }
        },
      });

      export const {
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        cleanCart,
      } = cartSlice.actions;
      
      export default cartSlice.reducer;
