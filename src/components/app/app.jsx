import React from 'react';
import Char from '../char';
import ValueFields from '../value-fields';
import { TYPE_CHAR } from '../../conversion';
import { PageHeader } from 'react-bootstrap';

const HEADER_TEXT = 'Unicode Characters';
const HEADER_URL = 'https://en.wikipedia.org/wiki/Unicode';
const HEADER_TITLE = '\'Unicode\' on Wikipedia';

const App = ({ codePoint, isValid }) => (
	<div className="container">
		<PageHeader>
			<a href={ HEADER_URL } title={ HEADER_TITLE }>
				{ HEADER_TEXT }
			</a>
		</PageHeader>
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
