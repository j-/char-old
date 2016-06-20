import {
	NEXT_PAGE,
	PREV_PAGE,
} from '../types';

const MIN_PAGE = 0;
const MAX_CODE_POINT = 0x10ffff;
const PAGE_SIZE = 0x10 * 0x10;
const MAX_PAGE = MAX_CODE_POINT * PAGE_SIZE;

const nextPage = (page) => Math.min(page, MAX_PAGE);
const prevPage = (page) => Math.max(page, MIN_PAGE);

export default (state = 0, action) => {
	switch (action.type) {
		case NEXT_PAGE:
			return nextPage(state);
		case PREV_PAGE:
			return prevPage(state);
		default:
			return state;
	}
};

export const getCurrentPage = (state) => state;
