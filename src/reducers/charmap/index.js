import { combineReducers } from 'redux';

const charmapDimensionReducer = (dimension) => (state = 0x10, action) => {
	// No actions to handle
	return state;
};

export default combineReducers({
	width: charmapDimensionReducer('width'),
	height: charmapDimensionReducer('height'),
});

const getCharmapDimension = (state, name) => state[name];

export const getCharmapWidth = (state) => getCharmapDimension(state, 'width');
export const getCharmapHeight = (state) => getCharmapDimension(state, 'height');
