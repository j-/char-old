import { combineReducers } from 'redux';
import codePoint, { getCodePoint as getStateCodePoint } from './code-point';
import inputValue, { getInputValue as getStateInputValue } from './input-value';
import lastModified, { getLastModified as getStateLastModified } from './last-modified';

import {
	TYPE_CHAR,
	TYPE_DECIMAL,
} from '../conversion';

const inputValues = combineReducers({
	[TYPE_CHAR]: inputValue(TYPE_CHAR),
	[TYPE_DECIMAL]: inputValue(TYPE_DECIMAL),
});

export default combineReducers({
	codePoint,
	inputValues,
	lastModified,
});

export const getCodePoint = (state) => (
	getStateCodePoint(state.codePoint)
);

export const getInputValue = (state, type) => (
	getStateInputValue(state.inputValues[type])
);

export const getLastModified = (state) => (
	getStateLastModified(state.lastModified)
);
