import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			//Mutating the state - directly modifying the state
			state.items.push(action.payload);
		},

		removeItem: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},

		clearCart: (state) => {
			state.items.length = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
