import { combineReducers } from 'redux';
import codePoint, { getCodePoint as getStateCodePoint } from './code-point';

export default combineReducers({
	codePoint,
});

export const getCodePoint = (state) => getStateCodePoint(state);
