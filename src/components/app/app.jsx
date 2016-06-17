import React from 'react';
import Char from '../char';
import ValueFields from '../value-fields';
import { TYPE_CHAR } from '../../conversion';

const App = ({ codePoint, isValid }) => (
	<div className="container">
		<h1>Char</h1>
		<div className="char-display">
			<Char
				codePoint={ codePoint }
				isValid={ isValid }
				type={ TYPE_CHAR }
			/>
		</div>
		<ValueFields />
	</div>
);

export default App;
