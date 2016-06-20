import {
	SET_INPUT_VALUE,
	SET_CODE_POINT,
} from '../types';

export default (state = null, action) => {
	switch (action.type) {
		case SET_INPUT_VALUE:
			return action.inputType;
		case SET_CODE_POINT:
			return null;
		default:
			return state;
	}
};

export const getLastModified = (state) => state;
