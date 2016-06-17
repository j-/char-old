import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import createStore from './create-store';

const store = createStore();

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);
