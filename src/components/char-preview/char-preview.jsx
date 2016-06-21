import React from 'react';
import Char from '../char';
import { TYPE_CHAR } from '../../conversion';
import { Panel } from 'react-bootstrap';

const CharPreview = ({ codePoint, isValid }) => (
	<Panel>
		<div className="char-display">
			<Char
				codePoint={ codePoint }
				isValid={ isValid }
				type={ TYPE_CHAR }
			/>
		</div>
	</Panel>
);

export default CharPreview;
