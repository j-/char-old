import React from 'react';
import Char from '../char';
import ValueField from '../value-field';
import {
	TYPE_DECIMAL,
} from '../../conversion';

const App = ({ codePoint, setCodePoint }) => (
	<div className="container">
		<h1>Char</h1>
		<ValueField type={ TYPE_DECIMAL } />
		<div className="char-display">
			<Char codePoint={ codePoint } type="char" />
		</div>
	</div>
);

export default App;
