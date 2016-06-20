import {
	prevPage,
	nextPage,
} from '../reducers/actions';

const KEY_PREV = 0x25; // Left
const KEY_NEXT = 0x27; // Right

export default ({ dispatch }) => {
	document.addEventListener('keydown', (e) => {
		const code = e.which;
		switch (code) {
			case KEY_PREV:
				dispatch(prevPage());
				break;
			case KEY_NEXT:
				dispatch(nextPage());
				break;
			default:
				break;
		}
	});
};
