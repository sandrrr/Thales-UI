import { createStore } from '@reduxjs/toolkit';

const initialState = { program: undefined, data: [] };

function reducer(state = initialState, action) {
	switch (action.type) {
		case "program/change":
			return { ...state, program: action.value };
		case "data/init":
			return { ...state, data: action.value };
		default:
			return state;
	}
}

export const store = createStore(reducer);