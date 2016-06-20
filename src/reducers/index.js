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

import currentPage, {
	getCurrentPage as getStateCurrentPage,
} from './current-page';

import { types } from '../conversion';

let inputValues;
{
	const reducers = {};
	types.forEach((type) => reducers[type] = inputValue(type));
	inputValues = combineReducers(reducers);
}

export default combineReducers({
	codePoint,
	inputValues,
	lastModified,
	currentPage,
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

export const getCurrentPage = (state) => (
	getStateCurrentPage(state.currentPage)
);
