import React from 'react';
import Char from '../char';
import { TYPE_CHAR } from '../../conversion';

const CharPreview = ({ codePoint, isValid }) => (
	<div className="char-display">
		<Char
			codePoint={ codePoint }
			isValid={ isValid }
			type={ TYPE_CHAR }
		/>
	</div>
);

export default CharPreview;
