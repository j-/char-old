import React from 'react';
import Char from '../char';
import ValueField from '../value-field';
import {
	TYPE_CHAR,
	TYPE_DECIMAL,
	TYPE_HEXADECIMAL,
} from '../../conversion';

const App = ({ codePoint, isValid, setCodePoint }) => (
	<div className="container">
		<h1>Char</h1>
		<div className="char-display">
			<Char
				codePoint={ codePoint }
				isValid={ isValid }
				type={ TYPE_CHAR }
			/>
		</div>
		<ul className="list-unstyled">
			<li>
				<label>Character</label>
				<ValueField type={ TYPE_CHAR } />
			</li>
			<li>
				<label>Decimal</label>
				<ValueField type={ TYPE_DECIMAL } />
			</li>
			<li>
				<label>Hexadecimal</label>
				<ValueField type={ TYPE_HEXADECIMAL } />
			</li>
		</ul>
	</div>
);

export default App;
