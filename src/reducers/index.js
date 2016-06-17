import { combineReducers } from 'redux';

import codePoint, {
	getCodePoint as getStateCodePoint,
	isCodePointValid as getStateCodePointValid,
} from './code-point';

import inputValue, {
	getInputValue as getStateInputValue,
} from './input-value';

import lastModified, {
	getLastModified as getStateLastModified,
} from './last-modified';

import {
	TYPE_CHAR,
	TYPE_DECIMAL,
	TYPE_HEXADECIMAL,
} from '../conversion';

const inputValues = combineReducers({
	[TYPE_CHAR]: inputValue(TYPE_CHAR),
	[TYPE_DECIMAL]: inputValue(TYPE_DECIMAL),
	[TYPE_HEXADECIMAL]: inputValue(TYPE_HEXADECIMAL),
});

export default combineReducers({
	codePoint,
	inputValues,
	lastModified,
});

export const getCodePoint = (state) => (
	getStateCodePoint(state.codePoint)
);

export const isCodePointValid = (state) => (
	getStateCodePointValid(state.codePoint)
);

export const getInputValue = (state, type) => (
	getStateInputValue(state.inputValues[type])
);

export const getLastModified = (state) => (
	getStateLastModified(state.lastModified)
);
