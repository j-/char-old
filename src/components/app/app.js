import React from 'react';
import Char from '../char';
import ValueField from '../value-field';
import {
	TYPE_CHAR,
	TYPE_DECIMAL,
} from '../../conversion';

const App = ({ codePoint, isValid, setCodePoint }) => (
	<div className="container">
		<h1>Char</h1>
		<ValueField type={ TYPE_DECIMAL } />
		<div className="char-display">
			<Char
				codePoint={ codePoint }
				isValid={ isValid }
				type={ TYPE_CHAR }
			/>
		</div>
	</div>
);

export default App;
