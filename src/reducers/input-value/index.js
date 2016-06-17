import {
	SET_INPUT_VALUE,
} from '../types';

export default (inputType) => (state = null, action) => {
	if (action.inputType !== inputType) {
		return state;
	}
	switch (action.type) {
		case SET_INPUT_VALUE:
			return action.value;
		default:
			return state;
	}
};

export const getInputValue = (state) => state;
