import { compose, applyMiddleware } from 'redux';
import createStore from './create-store';

let devTools = null;

if (__DEV__ && window.devToolsExtension) {
	// Grab extension middleware from window only when
	// in development mode and when is is installed
	devTools = window.devToolsExtension();
} else {
	// Identity function, returns first argument
	devTools = i => i;
}

const middleware = [
	// Add to this to install new middleware
];

export default (initialState) => {
	return createStore(initialState, compose(
		applyMiddleware(...middleware),
		devTools
	));
};
