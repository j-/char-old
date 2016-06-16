import {
	SET_CODE_POINT,
} from '../types';

const DEFAULT_STATE = 0;

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CODE_POINT:
			return action.codePoint;
		default:
			return state;
	}
};

export const getCodePoint = (state) => state;
