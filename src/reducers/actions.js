import {
	SET_CODE_POINT,
	SET_INPUT_VALUE,
	NEXT_PAGE,
	PREV_PAGE,
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

export const nextPage = () => ({
	type: NEXT_PAGE,
});

export const prevPage = () => ({
	type: PREV_PAGE,
});
