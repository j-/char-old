import {
	SET_INPUT_VALUE,
} from '../types';

export default (state = null, action) => {
	switch (action.type) {
		case SET_INPUT_VALUE:
			return action.inputType;
		default:
			return state;
	}
};

export const getLastModified = (state) => state;
