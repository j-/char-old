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

import charmap, {
	getCharmapWidth as getStateCharmapWidth,
	getCharmapHeight as getStateCharmapHeight,
} from './charmap';

import { types } from '../conversion';

const MAX_CODE_POINT = 0x10ffff;

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
	charmap,
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

export const getCharmapWidth = (state) => (
	getStateCharmapWidth(state.charmap)
);

export const getCharmapHeight = (state) => (
	getStateCharmapHeight(state.charmap)
);

export const getPageSize = (state) => (
	getCharmapWidth(state) * getCharmapHeight(state)
);

export const getMinPage = () => 0;

export const getMaxPage = (state) => (
	Math.ceil(MAX_CODE_POINT / getPageSize(state))
);

export const isMinPage = (state) => (
	getCurrentPage(state) === getMinPage(state)
);

export const isMaxPage = (state) => (
	getCurrentPage(state) === getMaxPage(state)
);
