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

import charmap, {
	getCharmapWidth as getStateCharmapWidth,
	getCharmapHeight as getStateCharmapHeight,
	getCurrentPage as getStateCurrentPage,
	getPageSize as getStatePageSize,
	getMinPage as getStateMinPage,
	getMaxPage as getStateMaxPage,
	isMinPage as isStateMinPage,
	isMaxPage as isStateMaxPage,
	getPageForCodePoint as getStatePageForCodePoint,
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

export const getCharmapWidth = (state) => (
	getStateCharmapWidth(state.charmap)
);

export const getCharmapHeight = (state) => (
	getStateCharmapHeight(state.charmap)
);

export const getCurrentPage = (state) => (
	getStateCurrentPage(state.charmap)
);

export const getPageSize = (state) => (
	getStatePageSize(state.charmap)
);

export const getMinPage = (state) => (
	getStateMinPage(state.charmap)
);

export const getMaxPage = (state) => (
	getStateMaxPage(state.charmap)
);

export const isMinPage = (state) => (
	isStateMinPage(state.charmap)
);

export const isMaxPage = (state) => (
	isStateMaxPage(state.charmap)
);

export const getPageForCodePoint = (state, codePoint) => (
	getStatePageForCodePoint(state.charmap, codePoint)
);
