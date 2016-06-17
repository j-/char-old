import React from 'react';
import Char from '../char';

const App = ({ codePoint, setCodePoint }) => (
	<div className="container">
		<h1>Char</h1>
		<input
			type="text"
			value={ codePoint }
			onChange={ (e) => setCodePoint(e.target.value) }
		/>
		<div className="char-display">
			<Char codePoint={ codePoint } type="char" />
		</div>
	</div>
);

export default App;
