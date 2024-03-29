import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './configure-store';
import keyboardInputManager from './managers/keyboard-input';

import './styles';

const store = configureStore();

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);

keyboardInputManager(store);
