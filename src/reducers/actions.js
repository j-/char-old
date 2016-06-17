import {
	SET_CODE_POINT,
	SET_INPUT_VALUE,
} from './types';

export const setCodePoint = (codePoint) => ({
	type: SET_CODE_POINT,
	codePoint: Number(codePoint),
});

export const setInputValue = (inputType, value) => ({
	type: SET_INPUT_VALUE,
	inputType,
	value,
});
