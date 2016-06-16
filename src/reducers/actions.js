import {
	SET_CODE_POINT,
} from './types';

export const setCodePoint = (codePoint) => ({
	type: SET_CODE_POINT,
	codePoint,
});
