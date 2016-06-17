import React from 'react';
import Char from '../char';

const App = ({ codePoint }) => (
	<div className="container">
		<h1>Char</h1>
		<Char codePoint={ codePoint } type="char" />
	</div>
);

export default App;
