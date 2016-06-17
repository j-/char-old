import React from 'react';
import ValueField from '../value-field';
import {
	TYPE_CHAR,
	TYPE_DECIMAL,
	TYPE_HEXADECIMAL,
} from '../../conversion';

const ValueFields = () => (
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
);

export default ValueFields;
