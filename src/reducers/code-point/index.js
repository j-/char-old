import { convertToCodePoint } from '../../conversion';

import {
	SET_CODE_POINT,
	SET_INPUT_VALUE,
} from '../types';

const DEFAULT_STATE = 0;

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CODE_POINT:
			return action.codePoint;
		case SET_INPUT_VALUE:
			return convertToCodePoint(
				action.value,
				action.inputType
			);
		default:
			return state;
	}
};

export const getCodePoint = (state) => state;

export const isCodePointValid = (state) => (
	// Code point must be a valid integer
	!isNaN(state) &&
	// Cannot be negative
	state >= 0 &&
	// Cannot exceed maximum valid code point
	state <= 0x10ffff
);
