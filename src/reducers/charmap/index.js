import { convertToCodePoint } from '../../conversion';
import {
	NEXT_PAGE,
	PREV_PAGE,
	SET_INPUT_VALUE,
} from '../types';

const {
	max,
	min,
	ceil,
	floor,
} = Math;

const MAX_CODE_POINT = 0x10ffff;

const DEFAULT_STATE = {
	currentPage: 0,
	width: 0x10,
	height: 0x10,
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return {
				...state,
				currentPage: min(
					state.currentPage + 1,
					getMaxPage(state)
				),
			};
		case PREV_PAGE:
			return {
				...state,
				currentPage: max(
					state.currentPage - 1,
					getMinPage(state)
				),
			};
		case SET_INPUT_VALUE:
			const codePoint = convertToCodePoint(
				action.value,
				action.inputType
			);
			if (!codePoint) {
				return state;
			}
			return {
				...state,
				currentPage: getPageForCodePoint(
					state,
					codePoint
				),
			};
		default:
			return state;
	}
};

export const getCharmapWidth = (state) => state.width;

export const getCharmapHeight = (state) => state.height;

export const getCurrentPage = (state) => state.currentPage;

export const getPageSize = (state) => (
	getCharmapWidth(state) * getCharmapHeight(state)
);

export const getMinPage = () => 0;

export const getMaxPage = (state) => (
	ceil(MAX_CODE_POINT / getPageSize(state))
);

export const isMinPage = (state) => (
	getCurrentPage(state) === getMinPage(state)
);

export const isMaxPage = (state) => (
	getCurrentPage(state) === getMaxPage(state)
);

export const getPageForCodePoint = (state, codePoint) => (
	floor(codePoint / getPageSize(state))
);
