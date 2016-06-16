import { createStore } from 'redux';
import reducer from './reducers';

export default (...args) => {
	return createStore(reducer, ...args);
};
